export type LanguageOption = {
  code: string;
  englishName: string;
  nativeName: string;
};

const LANGUAGE_CODES = [
  "en",
  "es",
  "ar",
  "zh",
  "fr",
  "ru",
  "de",
  "pt",
  "hi",
  "bn",
  "ja",
  "ko",
  "it",
  "nl",
  "sv",
  "no",
  "da",
  "fi",
  "el",
  "tr",
  "pl",
  "cs",
  "sk",
  "hu",
  "ro",
  "bg",
  "sr",
  "hr",
  "bs",
  "sl",
  "uk",
  "be",
  "lt",
  "lv",
  "et",
  "ga",
  "cy",
  "gd",
  "mt",
  "he",
  "fa",
  "ur",
  "ps",
  "pa",
  "gu",
  "ta",
  "te",
  "ml",
  "mr",
  "kn",
  "si",
  "th",
  "vi",
  "id",
  "ms",
  "tl",
  "my",
  "km",
  "lo",
  "mn",
  "kk",
  "uz",
  "az",
  "hy",
  "ka",
  "am",
  "ti",
  "sw",
  "af",
  "zu",
  "xh",
  "st",
  "tn",
  "yo",
  "ig",
  "ha",
  "so",
  "rw",
  "ln",
  "mg",
  "qu",
  "ay",
  "gn",
  "es-419",
  "pt-BR",
  "pt-PT",
  "es-ES",
  "zh-TW",
  "zh-CN",
  "ne",
  "dz",
  "bo",
  "is",
  "sq",
  "mk",
  "ku",
  "kmr",
  "ug",
  "kkj",
  "vi-VN",
  "fr-CA",
] as const;

const hasDisplayNames =
  typeof Intl !== "undefined" && typeof Intl.DisplayNames === "function";

const englishDisplay = hasDisplayNames
  ? new Intl.DisplayNames(["en"], { type: "language" })
  : null;

const displayCache = new Map<string, Intl.DisplayNames | null>();

function canonicalize(tag: string): string {
  try {
    const [canonical] = Intl.getCanonicalLocales(tag);
    return canonical ?? tag;
  } catch {
    return tag;
  }
}

function getDisplayNames(locale: string): Intl.DisplayNames | null {
  if (!hasDisplayNames) {
    return null;
  }

  const canonicalLocale = canonicalize(locale);
  if (displayCache.has(canonicalLocale)) {
    return displayCache.get(canonicalLocale) ?? null;
  }
  try {
    const display = new Intl.DisplayNames([canonicalLocale], {
      type: "language",
    });
    displayCache.set(canonicalLocale, display);
    return display;
  } catch {
    displayCache.set(canonicalLocale, null);
    return null;
  }
}

function resolveLanguageName(code: string, locale: string): string | null {
  const display = getDisplayNames(locale);
  if (!display) {
    return null;
  }

  const canonicalCode = canonicalize(code);
  const direct = display.of(canonicalCode);
  if (typeof direct === "string") {
    return direct;
  }

  const base = canonicalCode.split("-")[0];
  if (base !== canonicalCode) {
    const fallback = display.of(base);
    if (typeof fallback === "string") {
      return fallback;
    }
  }

  return null;
}

function getEnglishName(code: string): string {
  const canonicalCode = canonicalize(code);
  const direct = englishDisplay?.of(canonicalCode);
  if (typeof direct === "string") {
    return direct;
  }

  const base = canonicalCode.split("-")[0];
  if (base !== canonicalCode) {
    const fallback = englishDisplay?.of(base);
    if (typeof fallback === "string") {
      return fallback;
    }
  }

  return canonicalCode;
}

function getNativeName(code: string): string {
  const canonicalCode = canonicalize(code);
  const direct = resolveLanguageName(canonicalCode, canonicalCode);
  if (typeof direct === "string") {
    return direct;
  }

  const base = canonicalCode.split("-")[0];
  if (base !== canonicalCode) {
    const baseResult = resolveLanguageName(canonicalCode, base);
    if (typeof baseResult === "string") {
      return baseResult;
    }
  }

  const english = getEnglishName(code);
  const fallback = resolveLanguageName(canonicalCode, "en");
  return fallback ?? english;
}

export const languages: LanguageOption[] = LANGUAGE_CODES.map((code) => {
  const englishName = getEnglishName(code);
  const nativeName = getNativeName(code);
  return {
    code,
    englishName,
    nativeName,
  };
});

export const languagesByCode = new Map<string, LanguageOption>(
  languages.map((lang) => [lang.code, lang]),
);
