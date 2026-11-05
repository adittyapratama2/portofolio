import "server-only";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  id: () => import("./dictionaries/id.json").then((m) => m.default),
};

export type Locale = keyof typeof dictionaries;
export const locales = Object.keys(dictionaries) as Locale[];

export const hasLocale = (value: string): value is Locale => value in dictionaries;

export const getDictionary = (locale: Locale) => dictionaries[locale]();
