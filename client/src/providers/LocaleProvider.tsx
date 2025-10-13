import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type PropsWithChildren,
} from "react";
import { useLocation } from "wouter";
import { languagesByCode } from "@/data/languages";

type LocaleContextValue = {
  locale: string;
  restPath: string;
  search: string;
  buildPath: (path?: string) => string;
  setLocale: (
    code: string,
    options?: {
      preservePath?: boolean;
      preserveSearch?: boolean;
      replace?: boolean;
    },
  ) => void;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

type ParsedLocation = {
  locale: string | null;
  restPath: string;
  search: string;
  redirect: string | null;
};

function normalizePath(path: string): string {
  if (!path) return "";
  if (path === "/") return "";
  return path.startsWith("/") ? path : `/${path}`;
}

function parseLocation(location: string): ParsedLocation {
  const [rawPath, rawSearch = ""] = location.split("?");
  const path = rawPath.startsWith("/") ? rawPath : `/${rawPath}`;
  const segments = path.split("/").filter(Boolean);

  if (segments.length === 0) {
    return {
      locale: null,
      restPath: "",
      search: rawSearch ? `?${rawSearch}` : "",
      redirect: "/en",
    };
  }

  const potentialLocale = segments[0];
  const localeOption = findLocale(potentialLocale);

  if (!localeOption) {
    const redirectPath = `/en${path === "/" ? "" : path}`;
    return {
      locale: null,
      restPath: "",
      search: rawSearch ? `?${rawSearch}` : "",
      redirect: redirectPath,
    };
  }

  const restSegments = segments.slice(1);
  const restPath = restSegments.length ? `/${restSegments.join("/")}` : "";
  return {
    locale: localeOption,
    restPath,
    search: rawSearch ? `?${rawSearch}` : "",
    redirect: null,
  };
}

function findLocale(code: string | null | undefined): string | null {
  if (!code) return null;
  if (languagesByCode.has(code)) {
    return code;
  }
  const lower = code.toLowerCase();
  for (const key of Array.from(languagesByCode.keys())) {
    if (key.toLowerCase() === lower) {
      return key;
    }
  }
  return null;
}

export function LocaleProvider({ children }: PropsWithChildren) {
  const [location, setLocation] = useLocation();
  const parsed = useMemo(() => parseLocation(location), [location]);

  useEffect(() => {
    if (parsed.redirect) {
      setLocation(parsed.redirect, { replace: true });
    }
  }, [parsed.redirect, setLocation]);

  const value = useMemo<LocaleContextValue | undefined>(() => {
    if (!parsed.locale) {
      return undefined;
    }

    const buildPath = (path: string = "") => {
      const normalized = normalizePath(path);
      return `/${parsed.locale}${normalized}`;
    };

    const setLocale = (
      nextCode: string,
      options?: {
        preservePath?: boolean;
        preserveSearch?: boolean;
        replace?: boolean;
      },
    ) => {
      const resolved = findLocale(nextCode) ?? "en";
      const keepPath = options?.preservePath ?? true;
      const keepSearch = options?.preserveSearch ?? true;
      const nextPath = keepPath ? parsed.restPath : "";
      const nextSearch = keepSearch ? parsed.search : "";
      const target = `/${resolved}${nextPath}${nextSearch}`;
      if (target === location) {
        return;
      }
      setLocation(target, { replace: options?.replace ?? false });
    };

    return {
      locale: parsed.locale,
      restPath: parsed.restPath,
      search: parsed.search,
      buildPath,
      setLocale,
    };
  }, [location, parsed.locale, parsed.restPath, parsed.search, setLocation]);

  if (parsed.redirect || !value) {
    return null;
  }

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
