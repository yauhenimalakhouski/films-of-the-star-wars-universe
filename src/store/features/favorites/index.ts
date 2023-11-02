"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Film } from "@/types/types";
import {
  loadFavoritesFromLocalStorage,
  removeMovieFromFavorites,
  saveMovieToFavorites,
} from "@/utils/localStorage";

type FavoritesFilms = {
  films: Film[];
};

let initialState: FavoritesFilms = {
  films: [],
};

if (typeof window !== "undefined") {
  initialState = {
    films: loadFavoritesFromLocalStorage(),
  };
}

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFilm: (state, action: PayloadAction<Film>) => {
      const film = action.payload;
      state.films.push(film);
      saveMovieToFavorites(film);
    },
    removeFilm: (state, action: PayloadAction<number>) => {
      const filmId = action.payload;
      state.films = state.films.filter((film) => film.id !== filmId);
      removeMovieFromFavorites(filmId);
    },
  },
});

export const { addFilm, removeFilm } = favoritesSlice.actions;
