import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Film } from "@/types/types";

type FavoritesFilms = {
  films: Film[];
};

const initialState: FavoritesFilms = {
  films: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFilm: (state, action: PayloadAction<Film>) => {
      const film = action.payload;
      state.films.push(film);
    },
    removeFilm: (state, action: PayloadAction<number>) => {
      const filmId = action.payload;
      state.films = state.films.filter((film) => film.id !== filmId);
    },
  },
});

export const {addFilm, removeFilm} = favoritesSlice.actions;
