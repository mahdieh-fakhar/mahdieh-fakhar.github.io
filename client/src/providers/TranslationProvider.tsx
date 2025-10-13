import {
  createContext,
  useCallback,
  useContext,
  useEffect,
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
import { toast } from "@/hooks/use-toast";

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

const DEFAULT_TRANSLATION_ENDPOINT = "/api/translate";
const CUSTOM_TRANSLATION_ENDPOINT =
  typeof import.meta !== "undefined" &&
  typeof import.meta.env !== "undefined" &&
  typeof import.meta.env.VITE_TRANSLATION_ENDPOINT === "string"
    ? import.meta.env.VITE_TRANSLATION_ENDPOINT.trim()
    : "";
const TRANSLATION_ENDPOINT =
  CUSTOM_TRANSLATION_ENDPOINT.length > 0
    ? CUSTOM_TRANSLATION_ENDPOINT
    : DEFAULT_TRANSLATION_ENDPOINT;
const SHOULD_USE_FALLBACK_TRANSLATOR =
  TRANSLATION_ENDPOINT === DEFAULT_TRANSLATION_ENDPOINT;
const GOOGLE_TRANSLATE_ENDPOINT =
  "https://translate.googleapis.com/translate_a/single";

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

async function requestServerTranslations(
  texts: string[],
  targetLanguage: string,
  signal?: AbortSignal,
) {
  if (signal?.aborted) {
    throw new DOMException("Translation aborted", "AbortError");
  }

  const response = await fetch(TRANSLATION_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ texts, targetLanguage }),
    signal,
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

async function requestFallbackTranslations(
  texts: string[],
  targetLanguage: string,
  signal?: AbortSignal,
) {
  const results: string[] = [];

  for (const text of texts) {
    if (signal?.aborted) {
      throw new DOMException("Translation aborted", "AbortError");
    }

    const params = new URLSearchParams({
      client: "gtx",
      sl: "auto",
      tl: targetLanguage,
      dt: "t",
      q: text,
    });

    const response = await fetch(
      `${GOOGLE_TRANSLATE_ENDPOINT}?${params.toString()}`,
      {
        method: "GET",
        signal,
        headers: {
          Accept: "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(
        `Fallback translation failed with ${response.status}`,
      );
    }

    const data = await response.json();
    const segments = Array.isArray(data?.[0]) ? data[0] : [];
    const translated = Array.isArray(segments)
      ? segments
          .map((segment) =>
            Array.isArray(segment) && typeof segment[0] === "string"
              ? segment[0]
              : "",
          )
          .join("")
      : "";

    results.push(translated || text);
  }

  return results;
}

async function requestTranslations(
  texts: string[],
  targetLanguage: string,
  signal?: AbortSignal,
) {
  try {
    return await requestServerTranslations(texts, targetLanguage, signal);
  } catch (error) {
    if (
      signal?.aborted ||
      !SHOULD_USE_FALLBACK_TRANSLATOR ||
      (error instanceof DOMException && error.name === "AbortError")
    ) {
      throw error;
    }

    if (typeof console !== "undefined") {
      console.warn(
        "Primary translation endpoint failed, attempting fallback translator.",
        error,
      );
    }

    return await requestFallbackTranslations(texts, targetLanguage, signal);
  }
}

export function TranslationProvider({ children }: PropsWithChildren) {
  const defaultLanguage = useMemo(
    () => languagesByCode.get("en") ?? languageOptions[0],
    [],
  );
  const [language, setLanguageState] =
    useState<LanguageOption>(defaultLanguage);
  const [isTranslating, setIsTranslating] = useState(false);
  const originalTextMap = useRef(new Map<Text, string>());
  const translationCache = useRef<Map<string, Map<string, string>>>(new Map());
  const sortedLanguages = useMemo(
    () =>
      [...languageOptions].sort((a, b) =>
        a.englishName.localeCompare(b.englishName),
      ),
    [],
  );
  const hasMountedRef = useRef(false);
  const controllerRef = useRef<AbortController | null>(null);
  const pendingPromiseRef = useRef<{
    resolve: () => void;
    reject: (error: unknown) => void;
  } | null>(null);

  const settlePending = useCallback(
    (action: "resolve" | "reject", value?: unknown) => {
      const pending = pendingPromiseRef.current;
      if (!pending) {
        return;
      }
      pendingPromiseRef.current = null;
      if (action === "resolve") {
        pending.resolve();
      } else {
        pending.reject(value);
      }
    },
    [],
  );

  const restoreOriginalText = useCallback(() => {
    originalTextMap.current.forEach((value, node) => {
      if (!node.isConnected) {
        originalTextMap.current.delete(node);
        return;
      }
      if (node.nodeValue !== value) {
        node.nodeValue = value;
      }
    });
  }, []);

  const applyTranslationsToDocument = useCallback(
    async (targetLanguage: LanguageOption, signal: AbortSignal) => {
      originalTextMap.current.forEach((_value, node) => {
        if (!node.isConnected) {
          originalTextMap.current.delete(node);
        }
      });

      const nodes = collectTextNodes(document.body);
      const textToNodes = new Map<string, Text[]>();

      nodes.forEach((node) => {
        if (signal.aborted) {
          return;
        }
        const baseOriginal =
          originalTextMap.current.get(node) ?? node.nodeValue ?? "";

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
          if (signal.aborted) {
            return;
          }
          const translations = await requestTranslations(
            chunk,
            targetLanguage.code,
            signal,
          );

          translations.forEach((translation, index) => {
            const original = chunk[index];
            cache.set(original, translation);
          });
        }

        translationCache.current.set(targetLanguage.code, cache);
      }

      textToNodes.forEach((nodesForText, text) => {
        if (signal.aborted) {
          return;
        }
        const translated = cache.get(text);
        if (typeof translated !== "string") return;
        nodesForText.forEach((node) => {
          if (!signal.aborted) {
            node.nodeValue = translated;
          }
        });
      });
    },
    [],
  );

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;

    const execute = async () => {
      setIsTranslating(true);
      try {
        if (language.code === "en") {
          restoreOriginalText();
          settlePending("resolve");
          return;
        }

        await applyTranslationsToDocument(language, controller.signal);
        if (controller.signal.aborted) {
          return;
        }

        settlePending("resolve");
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }
        console.error("Translation error:", error);
        restoreOriginalText();
        const fallback = languagesByCode.get("en") ?? languageOptions[0];
        settlePending("reject", error);
        toast({
          title: "Translation unavailable",
          description:
            error instanceof Error
              ? error.message
              : "Unable to translate content right now.",
          variant: "destructive",
        });
        setLanguageState(fallback);
      } finally {
        if (!controller.signal.aborted) {
          setIsTranslating(false);
        }
      }
    };

    void execute();

    return () => {
      controller.abort();
    };
  }, [
    language,
    applyTranslationsToDocument,
    restoreOriginalText,
    settlePending,
  ]);

  const handleLanguageChange = useCallback(
    (code: string) => {
      const target =
        languagesByCode.get(code) ?? languagesByCode.get("en") ?? defaultLanguage;

      if (target.code === language.code) {
        return Promise.resolve();
      }

      controllerRef.current?.abort();
      if (pendingPromiseRef.current) {
        pendingPromiseRef.current.reject(new Error("Translation interrupted"));
        pendingPromiseRef.current = null;
      }

      setIsTranslating(true);

      return new Promise<void>((resolve, reject) => {
        pendingPromiseRef.current = { resolve, reject };
        setLanguageState(target);
      });
    },
    [defaultLanguage, language.code],
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
