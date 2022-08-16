import { useEffect, useLayoutEffect, useState } from 'react';

import MoonIcon from '/public/svg/moon.svg';
import SunIcon from '/public/svg/sun.svg';

const THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
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

  const changeToSelectedTheme = (theme: string) => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    setSelectedTheme(theme);
  };

  const changeTheme = () => {
    if (selectedTheme === THEMES.DARK) {
      return changeToSelectedTheme(THEMES.LIGHT);
    }
    changeToSelectedTheme(THEMES.DARK);
  };

  useEffect(() => {}, []);

  return (
    <div
      onClick={() => changeTheme()}
      className="cursor-pointer rounded p-2 bg-fuchsia-300 dark:bg-stone-500"
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
