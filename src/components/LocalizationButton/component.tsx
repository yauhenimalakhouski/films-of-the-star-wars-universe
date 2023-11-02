"use client";

import { useEffect, useState } from "react";
import { Button } from "../Button/component";
import { useAppDispatch } from "@/store/reduxHooks/reduxHooks";
import { loadLangFromLocalStorage, saveLangToLocalStorage } from "@/utils/localStorage";
import { saveLang } from "@/store/features/userSettings";



let savedLang;

export const LocalizationButton = () => {
  const [lang, setLang] = useState<string>("en");
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (typeof window !== "undefined") {
      savedLang = loadLangFromLocalStorage();
      if (savedLang) {
        setLang(savedLang);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      saveLangToLocalStorage(lang);
      dispatch(saveLang(lang));
    }
  }, [lang]);

  return (
    <Button
      onClick={() => {
        setLang(lang === "ru" ? "en" : "ru");
      }}
      type={"btn_lang"}
      switchType={`${lang}`}
    >
      {lang}
    </Button>
  );
};
