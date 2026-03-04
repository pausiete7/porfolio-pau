export const LANGUAGES = {
  en: "English",
  es: "Español",
  ca: "Català",
} as const;

export const DEFAULT_LANG = "en" as const;

export type Lang = keyof typeof LANGUAGES;
