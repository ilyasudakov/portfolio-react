import { useRouter } from 'next/router';

import ru from '../data/locales/ru';
import en from '../data/locales/en';
import { sectionType, sectionNameType } from '../data/locales/types';

const locales = ['en', 'ru'] as const;
export type localeType = typeof locales[number];
const localeData = {
  en: en,
  ru: ru
};

export default function useLang(sectionName: sectionNameType): {
  locale: localeType;
  t: sectionType;
} {
  const { locale: _locale, locales: _locales = [] } = useRouter();

  const locale: localeType = _locales.includes(_locale || '')
    ? (_locale as localeType)
    : 'ru';

  const section = localeData[locale][sectionName];
  return { locale, t: section };
}
