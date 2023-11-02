"use client";

import { useAppSelector } from "@/store/reduxHooks/reduxHooks";
import { Favorites } from "./component";
import { selectFavoriteFilms } from "@/store/features/favorites/selector";
import { Film } from "@/types/types";

let favoritesFilms: Film[];

export const FavoritesContainer = () => {
  if (typeof window !== "undefined") {
    favoritesFilms = useAppSelector(selectFavoriteFilms);
  }

  return <Favorites favoritesFilms={favoritesFilms}></Favorites>;
};
