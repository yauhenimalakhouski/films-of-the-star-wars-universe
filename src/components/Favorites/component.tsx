"use client";

import { Film } from "@/types/types";
import { Button } from "../Button/component";

type CompProps = {
  favoritesFilms: Film[];
};

export const Favorites = ({ favoritesFilms }: CompProps) => {
  return (
    <div>
      <Button>Favorites films</Button>
      <div>
        {favoritesFilms.map((film) => (
          <div key={film.id}>{film.title}</div>
        ))}
      </div>
    </div>
  );
};
