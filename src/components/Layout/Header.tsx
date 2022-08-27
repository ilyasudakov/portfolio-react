import dynamic from 'next/dynamic';
import Link from 'next/link';
import { HEADER_ID } from '../../data/locales/types';
import useLang, { localeType } from '../../hooks/useLang';

import GithubIcon from '/public/svg/github.svg';

const ThemeSwitcher = dynamic(() => import('../ThemeSwitcher'), {
  ssr: false
});

const Header: React.FC = () => {
  const { t, locale } = useLang(HEADER_ID);

  return (
    <div
      className="sticky top-0 z-10 flex h-[60px] bg-violet-100/80 px-4
    backdrop-blur-sm dark:bg-stone-700/80 sm:px-10"
    >
      <div className="container mx-auto flex max-w-[70ch] items-center justify-between">
        <SourceLink sourceCodeLink={t.sourceCodeLink} />
        <div className="flex items-center gap-2">
          <LocaleSwitcher locale={locale} />
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Header;

const SourceLink = ({ sourceCodeLink }: { sourceCodeLink: string }) => {
  return (
    <a
      className="flex items-center gap-2 border-b border-b-transparent hover:border-b-stone-500 dark:hover:border-b-stone-300"
      href="https://github.com/ilyasudakov/portfolio"
      target="_blank"
      rel="noreferrer noopener"
    >
      <GithubIcon
        className="fill-stone-700 dark:fill-white"
        width="16px"
        height="16px"
      />
      {sourceCodeLink}
    </a>
  );
};

const LocaleSwitcher = ({ locale }: { locale: localeType }) => {
  return (
    <Link href="/" locale={locale === 'en' ? 'ru' : 'en'}>
      <div className="flex cursor-pointer rounded border border-stone-400 p-2 transition-all dark:border-stone-500">
        <div className="max-w-[20]px max-h-[20px] text-sm">
          {locale === 'en' ? 'RU' : 'EN'}
        </div>
      </div>
    </Link>
  );
};
