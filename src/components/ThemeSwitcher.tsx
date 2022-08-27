import { useEffect, useRef, useState } from 'react';

import MoonIcon from '/public/svg/moon.svg';
import SunIcon from '/public/svg/sun.svg';

const THEMES = {
  DARK: 'dark',
  LIGHT: 'light'
};

const ICON_SIZE = 20;

const isDarkModePersisted =
  localStorage.theme === THEMES.DARK ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches);

const ThemeSwitcher: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState(
    isDarkModePersisted ? THEMES.DARK : THEMES.LIGHT
  );
  const [hadFirstRender, setHadFirstRender] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const changeToSelectedTheme = (theme: string) => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    setSelectedTheme(theme);
  };

  const changeTheme = () => {
    if (!hadFirstRender) setHadFirstRender(true);
    if (selectedTheme === THEMES.DARK) {
      return changeToSelectedTheme(THEMES.LIGHT);
    }
    changeToSelectedTheme(THEMES.DARK);
  };

  useEffect(() => {
    if (!hadFirstRender) return;
    const ANIMATION_CLASSNAME = 'scale-[1.2]';
    ref.current?.classList.add(ANIMATION_CLASSNAME);
    const timeout = setTimeout(() => {
      ref.current?.classList.remove(ANIMATION_CLASSNAME);
    }, 300);
    return () => {
      clearTimeout(timeout);
    };
  }, [selectedTheme, hadFirstRender]);

  return (
    <div
      onClick={() => changeTheme()}
      ref={ref}
      className="cursor-pointer rounded border border-transparent bg-fuchsia-300 p-2 transition-all dark:bg-stone-500"
    >
      {selectedTheme === THEMES.DARK ? (
        <SunIcon width={ICON_SIZE} height={ICON_SIZE} />
      ) : (
        <MoonIcon width={ICON_SIZE} height={ICON_SIZE} />
      )}
    </div>
  );
};

export default ThemeSwitcher;
