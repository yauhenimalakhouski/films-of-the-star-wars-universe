"use client";

import {
  loadSortTypeFromLocalStorage,
  saveSortTypeToLocalStorage,
} from "@/utils/localStorage";
import { useEffect, useState } from "react";

let savedSortType;

export const FilmsSortBar = () => {
  const [sortType, setSortType] = useState<string>("episode-up");

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
          onChange={(event) => {
            setSortType(event.currentTarget.value);
            saveSortTypeToLocalStorage(event.currentTarget.value);
          }}
          value={sortType}
        >
          <option value="episode-up">From the first episode</option>
          <option value="episode-down">From the last episode</option>
          <option value="film-release-up">From old to new</option>
          <option value="film-release-down">From new to old</option>
        </select>
      </div>
    </div>
  );
};
