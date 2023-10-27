"use client";
import { useState } from "react";

import { Film } from "@/types/types";

import { searchFilmsSlice } from "@/store/features/searchFilms";
import { useAppDispatch, useAppSelector } from "@/store/reduxHooks/reduxHooks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { searchFilmsModule } from "@/store/features/searchFilms/selector";

type AppProps = {
  films: Film[];
};

export const SearchInput = ({ films }: AppProps) => {
  const searchTextFromStore = useSelector(searchFilmsModule)
  const [searchText, setSearchText] = useState("");
  
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
          setSearchText(event.target.value)
          dispatch(searchFilmsSlice.actions.putSearchString(searchText))
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
