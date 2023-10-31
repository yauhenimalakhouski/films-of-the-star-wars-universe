"use client";
import { useState } from "react";

import { Film } from "@/types/types";

import { searchFilmsSlice } from "@/store/features/searchFilms";
import { useAppDispatch, useAppSelector } from "@/store/reduxHooks/reduxHooks";
import { selectSearchFilmsValue } from "@/store/features/searchFilms/selector";

export const SearchInput = () => {
  const searchTextFromStore = useAppSelector(selectSearchFilmsValue);
  const [searchText, setSearchText] = useState(searchTextFromStore);
  const dispatch = useAppDispatch();

  return (
    <div>
      <input
        value={searchText || ""}
        onChange={(event) => {
          setSearchText(event.target.value);
          dispatch(
            searchFilmsSlice.actions.putSearchString(event.target.value)
          );
        }}
        placeholder="Search by Episode Number, Episode Title"
      />
    </div>
  );
};
