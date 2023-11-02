"use client";

import { saveSortTypeInStore } from "@/store/features/userSettings";
import { selectLang } from "@/store/features/userSettings/selectors";
import { useAppDispatch, useAppSelector } from "@/store/reduxHooks/reduxHooks";
import {
  loadSortTypeFromLocalStorage,
  saveSortTypeToLocalStorage,
} from "@/utils/localStorage";
import { useEffect, useState } from "react";

let savedSortType;

export const FilmsSortBar = () => {
  const [sortType, setSortType] = useState<string>("episode-up");
  const lang = useAppSelector(selectLang);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (typeof window !== "undefined") {
      savedSortType = loadSortTypeFromLocalStorage();
      if (savedSortType) {
        setSortType(savedSortType);
      }
    }
  }, []);

  return (
    <div>
      <span>Sort by:</span>
      <div>
        <select
          value={sortType}
          onChange={(event) => {
            setSortType(event.currentTarget.value);
            saveSortTypeToLocalStorage(event.currentTarget.value);
            dispatch(saveSortTypeInStore(event.currentTarget.value));
          }}
        >
          <option value="episode-up">
            {lang === "en" ? "From the first episode" : "С первого эпизода"}
          </option>
          <option value="episode-down">
            {lang === "en" ? "From the last episode" : "С последнего эпизода"}
          </option>
          <option value="film-release-up">
            {lang === "en" ? "From old to new" : "От старых к новым"}
          </option>
          <option value="film-release-down">
            {lang === "en" ? "From new to old" : "От новых к старым"}
          </option>
        </select>
      </div>
    </div>
  );
};
