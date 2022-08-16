import { useEffect, useState } from 'react';

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

  const changeToDarkTheme = () => {
    document.documentElement.classList.add(THEMES.DARK);
    localStorage.setItem('theme', THEMES.DARK);
    setSelectedTheme(THEMES.DARK);
  };

  const changeToLightTheme = () => {
    document.documentElement.classList.remove(THEMES.DARK);
    localStorage.setItem('theme', THEMES.LIGHT);
    setSelectedTheme(THEMES.LIGHT);
  };

  const changeTheme = () => {
    if (selectedTheme === THEMES.DARK) {
      return changeToLightTheme();
    }
    changeToDarkTheme();
  };

  useEffect(() => {
    if (isDarkModePersisted) {
      return changeToDarkTheme();
    }
    changeToLightTheme();
  }, []);

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
