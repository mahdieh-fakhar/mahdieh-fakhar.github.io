import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type PropsWithChildren,
} from "react";
import {
  languages as languageOptions,
  languagesByCode,
  type LanguageOption,
} from "@/data/languages";

type TranslationContextValue = {
  language: LanguageOption;
  setLanguage: (code: string) => Promise<void>;
  isTranslating: boolean;
  languages: LanguageOption[];
};

const TranslationContext = createContext<TranslationContextValue | undefined>(
  undefined,
);

const IGNORED_TAGS = new Set([
  "SCRIPT",
  "STYLE",
  "NOSCRIPT",
  "CODE",
  "PRE",
  "TEXTAREA",
  "OPTION",
]);

const MAX_TEXT_LENGTH = 1200;
const TRANSLATION_CHUNK = 40;

function collectTextNodes(root: Node): Text[] {
  const nodes: Text[] = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;

      if (parent.closest("[data-no-translate]")) {
        return NodeFilter.FILTER_REJECT;
      }

      if (IGNORED_TAGS.has(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }

      const text = node.nodeValue ?? "";
      if (!text.trim()) {
        return NodeFilter.FILTER_REJECT;
      }

      return NodeFilter.FILTER_ACCEPT;
    },
  });

  let current = walker.nextNode();
  while (current) {
    if (current instanceof Text) {
      nodes.push(current);
    }
    current = walker.nextNode();
  }

  return nodes;
}

async function requestTranslations(texts: string[], targetLanguage: string) {
  const response = await fetch("/api/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ texts, targetLanguage }),
  });

  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    throw new Error(
      payload?.error || `Translation request failed with ${response.status}`,
    );
  }

  const payload = (await response.json()) as { translations: string[] };
  if (!Array.isArray(payload.translations)) {
    throw new Error("Invalid translation payload");
  }
  return payload.translations;
}

export function TranslationProvider({ children }: PropsWithChildren) {
  const [language, setLanguageState] = useState<LanguageOption>(
    () => languagesByCode.get("en") ?? languageOptions[0],
  );
  const [isTranslating, setIsTranslating] = useState(false);
  const originalTextMap = useRef(new Map<Text, string>());
  const translationCache = useRef<Map<string, Map<string, string>>>(new Map());
  const sortedLanguages = useMemo(() => [...languageOptions].sort((a, b) => a.englishName.localeCompare(b.englishName)), []);

  const translateDocument = useCallback(
    async (targetCode: string) => {
      const targetLanguage = languagesByCode.get(targetCode) ?? languageOptions[0];
      if (targetLanguage.code === "en") {
        originalTextMap.current.forEach((value, node) => {
          node.nodeValue = value;
        });
        setLanguageState(targetLanguage);
        return;
      }

      const nodes = collectTextNodes(document.body);

      const textToNodes = new Map<string, Text[]>();

      nodes.forEach((node) => {
        const baseOriginal = originalTextMap.current.get(node) ?? node.nodeValue ?? "";
        if (!originalTextMap.current.has(node)) {
          originalTextMap.current.set(node, baseOriginal);
        }

        const original = baseOriginal;
        if (!original.trim()) return;
        if (original.length > MAX_TEXT_LENGTH) return;

        const list = textToNodes.get(original) ?? [];
        list.push(node);
        textToNodes.set(original, list);
      });

      if (textToNodes.size === 0) {
        setLanguageState(targetLanguage);
        return;
      }

      const cache =
        translationCache.current.get(targetLanguage.code) ??
        new Map<string, string>();

      const textsToTranslate: string[] = [];
      textToNodes.forEach((_nodes, text) => {
        if (!cache.has(text)) {
          textsToTranslate.push(text);
        }
      });

      if (textsToTranslate.length > 0) {
        const chunks: string[][] = [];
        for (let i = 0; i < textsToTranslate.length; i += TRANSLATION_CHUNK) {
          chunks.push(textsToTranslate.slice(i, i + TRANSLATION_CHUNK));
        }

        for (const chunk of chunks) {
          const translations = await requestTranslations(
            chunk,
            targetLanguage.code,
          );

          translations.forEach((translation, index) => {
            const original = chunk[index];
            cache.set(original, translation);
          });
        }

        translationCache.current.set(targetLanguage.code, cache);
      }

      textToNodes.forEach((nodesForText, text) => {
        const translated = cache.get(text);
        if (typeof translated !== "string") return;
        nodesForText.forEach((node) => {
          node.nodeValue = translated;
        });
      });

      setLanguageState(targetLanguage);
    },
    [],
  );

  const handleLanguageChange = useCallback(
    async (code: string) => {
      setIsTranslating(true);
      try {
        await translateDocument(code);
      } finally {
        setIsTranslating(false);
      }
    },
    [translateDocument],
  );

  const value = useMemo<TranslationContextValue>(
    () => ({
      language,
      setLanguage: handleLanguageChange,
      isTranslating,
      languages: sortedLanguages,
    }),
    [language, handleLanguageChange, isTranslating, sortedLanguages],
  );

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within TranslationProvider");
  }
  return context;
}
