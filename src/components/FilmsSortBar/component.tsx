"use client";

import { sortTypeSlice } from "@/store/features/sortType";
import { useAppDispatch } from "@/store/reduxHooks/reduxHooks";
import {
  loadSortTypeFromLocalStorage,
  saveSortTypeToLocalStorage,
} from "@/utils/localStorage";
import { useEffect, useState } from "react";

let savedSortType;

export const FilmsSortBar = () => {
  const [sortType, setSortType] = useState<string>("episode-up");
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
            dispatch(
              sortTypeSlice.actions.putSortType(event.currentTarget.value)
            );
          }}
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
