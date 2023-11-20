"use client";

import { saveLang } from "@/store/features/userSettings";
import { useAppDispatch } from "@/store/reduxHooks/reduxHooks";
import { useEffect } from "react";

export const LanguageLoader = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        // Получение языка из localStorage
        const savedLanguage = localStorage.getItem('lang');
        if (savedLanguage) {
          dispatch(saveLang(savedLanguage));
        }
      }, [dispatch]);
      return null;
}