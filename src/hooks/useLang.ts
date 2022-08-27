import { useRouter } from 'next/router';

import ru from '../data/locales/ru';
import en from '../data/locales/en';
import { landingPageSectionsType } from '../data/locales/types';

const LOCALE_RU = 'ru';
const LOCALE_EN = 'en';
const localeData = {
  [LOCALE_EN]: en,
  [LOCALE_RU]: ru
};
export type localeType = keyof typeof localeData;

export default function useLang<K extends keyof landingPageSectionsType>(
  sectionName: K
): {
  locale: localeType;
  t: landingPageSectionsType[K];
} {
  const { locale: _locale, locales: _locales = [] } = useRouter();

  const locale: localeType = _locales.includes(_locale || '')
    ? (_locale as localeType)
    : 'ru';

  const section = localeData[locale][sectionName];
  return { locale, t: section };
}
