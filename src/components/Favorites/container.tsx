"use client";

import { useAppSelector } from "@/store/reduxHooks/reduxHooks";
import { Favorites } from "./component";
import { selectFavoriteFilms } from "@/store/features/favorites/selector";

export const FavoritesContainer = () => {
  const favoritesFilms = useAppSelector(selectFavoriteFilms);

  return <Favorites favoritesFilms={favoritesFilms}></Favorites>;
};
