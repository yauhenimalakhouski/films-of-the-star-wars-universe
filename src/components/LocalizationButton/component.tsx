"use client";

import { useEffect, useState } from "react";
import { Button } from "../Button/component";

const LOCAL_STORAGE_KEY: string = "lang";

let savedLang;

export const LocalizationButton = () => {
  const [lang, setLang] = useState<string>("en");

  useEffect(() => {
    if (typeof window !== "undefined") {
      savedLang = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedLang) {
        setLang(savedLang);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCAL_STORAGE_KEY, lang);
    }
  }, [lang]);

  return (
    <Button
      onClick={() => setLang(lang === "ru" ? "en" : "ru")}
      type={"btn_lang"}
      switchType={`${lang}`}
    >
      {lang}
    </Button>
  );
};
