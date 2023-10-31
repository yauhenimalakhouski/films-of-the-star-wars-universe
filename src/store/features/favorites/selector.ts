import { RootState } from "@/store";

export const selectFavoriteFilms = (state: RootState) => state.favorites.films;

