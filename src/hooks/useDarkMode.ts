import { useEffect, useState } from "react";
import { setItemToLocalStorage } from "../shared/utils/setLocalStorageItem";
import {
  THEME,
  THEME_DARKMODE,
  THEME_LIGHTMODE,
} from "../shared/constant/localstorage";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  const toggleTheme = () => {
    if (localStorage.theme === "dark") {
      setItemToLocalStorage(THEME, THEME_LIGHTMODE);
      document.documentElement.classList.remove("dark");
    } else {
      setItemToLocalStorage(THEME, THEME_DARKMODE);
      document.documentElement.classList.add("dark");
    }
    setIsDarkMode((prevState) => !prevState);
  };

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
      setItemToLocalStorage(THEME, THEME_DARKMODE);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
      setItemToLocalStorage(THEME, THEME_LIGHTMODE);
    }
  }, []);

  return { isDarkMode, toggleTheme };
};
