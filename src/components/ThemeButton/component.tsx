"use client";

import { useEffect, useState } from "react";
import { Button } from "../Button/component";

const LOCAL_STORAGE_KEY:string = "theme";
let savedTheme;

export const ThemeButton = () => {
  const [theme, setTheme] = useState<string>("dark");
  useEffect(() => {
    if (typeof window !== "undefined") {
      savedTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCAL_STORAGE_KEY, theme);
      document.documentElement.setAttribute('theme', theme);
    }
  }, [theme]);

  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      type={`btn_theme`}
      switchType={`${theme}`}
    >{theme}</Button>
  );
};
