import dynamic from 'next/dynamic';

import GithubIcon from '/public/svg/github.svg';

const ThemeSwitcher = dynamic(() => import('../ThemeSwitcher'), {
  ssr: false,
});

const Header: React.FC = () => {
  return (
    <div
      className="flex px-4 sm:px-10 h-[60px] sticky top-0 z-10
    bg-violet-100/80 dark:bg-stone-700/80 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between container mx-auto max-w-[70ch]">
        <a
          className="flex items-center gap-2 border-b-stone-600 dark:border-b-white hover:border-b"
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
