import { DEFAULT_LANG, type Lang } from "./config";
import { en, type TranslationKey } from "./en";
import { es } from "./es";
import { ca } from "./ca";

export { LANGUAGES, DEFAULT_LANG, type Lang } from "./config";
export type { TranslationKey } from "./en";

const translations: Record<Lang, Record<TranslationKey, string>> = { en, es, ca };

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return translations[lang]?.[key] ?? translations[DEFAULT_LANG][key] ?? key;
  };
}

export function getLangFromUrl(url: URL): Lang {
  const [, langSegment] = url.pathname.split("/");
  if (langSegment === "es" || langSegment === "ca") return langSegment;
  return DEFAULT_LANG;
}
