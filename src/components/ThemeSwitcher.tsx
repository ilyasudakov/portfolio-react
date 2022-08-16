import { useEffect, useState } from 'react';

const THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
};

const ThemeSwitcher: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState(THEMES.DARK);

  const changeToDarkTheme = () => {
    document.documentElement.classList.add(THEMES.DARK);
    setSelectedTheme(THEMES.DARK);
  };
  const changeToLightTheme = () => {
    document.documentElement.classList.remove(THEMES.DARK);
    setSelectedTheme(THEMES.LIGHT);
  };
  const changeTheme = () => {
    if (selectedTheme === THEMES.DARK) {
      return changeToLightTheme();
    }
    changeToDarkTheme();
  };

  useEffect(() => {
    if (
      localStorage.theme === THEMES.DARK ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      return changeToDarkTheme();
    }
    changeToLightTheme();
  }, []);

  return (
    <div onClick={() => changeTheme()}>
      {selectedTheme === THEMES.DARK ? '☀️' : '🌑'}
    </div>
  );
};

export default ThemeSwitcher;
