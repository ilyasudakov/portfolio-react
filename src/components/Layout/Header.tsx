import dynamic from 'next/dynamic';

import GithubIcon from '/public/svg/github.svg';

const ThemeSwitcher = dynamic(() => import('../ThemeSwitcher'), {
  ssr: false,
});

const Header: React.FC = () => {
  return (
    <div
      className="sticky top-0 z-10 flex h-[60px] bg-violet-100/80 px-4
    backdrop-blur-sm dark:bg-stone-700/80 sm:px-10"
    >
      <div className="container mx-auto flex max-w-[70ch] items-center justify-between">
        <a
          className="flex items-center gap-2 border-b-stone-600 hover:border-b dark:border-b-white"
          href="https://github.com/ilyasudakov/portfolio"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GithubIcon
            className="fill-stone-700 dark:fill-white"
            width="16px"
            height="16px"
          />
          Исходный код
        </a>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Header;
