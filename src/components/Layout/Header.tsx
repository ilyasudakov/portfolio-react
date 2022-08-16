import dynamic from 'next/dynamic';

import GithubIcon from '/public/svg/github.svg';

const ThemeSwitcher = dynamic(() => import('../ThemeSwitcher'), {
  ssr: false,
});

const Header: React.FC = () => {
  return (
    <div
      className="flex items-center justify-between px-4 sm:px-10 h-[60px] sticky top-0 z-10
    dark:bg-stone-700/80 backdrop-blur-sm"
    >
      <a
        className="flex items-center gap-2"
        href="https://github.com/ilyasudakov/portfolio"
      >
        <GithubIcon
          className="fill-stone-700 dark:fill-white"
          width="16px"
          height="16px"
        />
        Этот проект
      </a>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
