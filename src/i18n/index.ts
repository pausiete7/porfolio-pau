import { DEFAULT_LANG, type Lang } from "./config";

export { LANGUAGES, DEFAULT_LANG, type Lang } from "./config";

export function getLangFromUrl(url: URL): Lang {
  const [, langSegment] = url.pathname.split("/");
  if (langSegment === "es" || langSegment === "ca") return langSegment;
  return DEFAULT_LANG;
}