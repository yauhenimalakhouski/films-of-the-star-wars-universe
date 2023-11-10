"use client";

import { useEffect, useState } from "react";
import { useAppDispatch } from "@/store/reduxHooks/reduxHooks";
import {
  loadLangFromLocalStorage,
  saveLangToLocalStorage,
} from "@/utils/localStorage";
import { saveLang } from "@/store/features/userSettings";

import styles from "./styles.module.css";

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
  }, [lang, dispatch]);

  return (
    <div className={styles.root}>
      <select
      className={styles.lang_select}
        value={lang}
        onChange={() => {
          setLang(lang === "ru" ? "en" : "ru");
        }}
      >
        <option value="en">EN</option>
        <option value="ru">RU</option>
      </select>
    </div>
  );
};
