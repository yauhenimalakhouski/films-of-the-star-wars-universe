"use client";
import { useState } from "react";

import { Film } from "@/types/types";

type AppProps = {
  films: Film[];
};

export const SearchInput = ({ films }: AppProps) => {
  const [searchText, setSearchText] = useState("");

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
        onChange={(event) => setSearchText(event.target.value)}
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
