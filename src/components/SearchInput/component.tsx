"use client";
import { useState } from "react";

import { Film } from "@/types/types";

import { searchFilmsSlice } from "@/store/features/searchFilms";
import { useAppDispatch, useAppSelector } from "@/store/reduxHooks/reduxHooks";
import { searchFilmsModule } from "@/store/features/searchFilms/selector";

type CompProps = {
  films: Film[];
};

export const SearchInput = ({ films }: CompProps) => {
  const searchTextFromStore = useAppSelector(searchFilmsModule);
  console.log(searchTextFromStore)
  const [searchText, setSearchText] = useState(searchTextFromStore);

  const dispatch = useAppDispatch();
  const filteredFilms = films.filter((film) => {
    return (
      film.title.toLowerCase().includes(searchText) ||
      String(film.episode_id).includes(searchText)
    );
  });
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
      <div>
        {filteredFilms.map((film) => (
          <div key={film.episode_id}>{film.title}</div>
        ))}
      </div>
    </div>
  );
};
