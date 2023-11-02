import { Film } from "@/types/types";

export function loadFavoritesFromLocalStorage(): Film[] {
  const favoritesData = localStorage.getItem("favorites");
  return favoritesData ? JSON.parse(favoritesData) : [];
}

export function saveFavoritesToLocalStorage(movies: Film[]): void {
  localStorage.setItem("favorites", JSON.stringify(movies));
}

export function saveMovieToFavorites(movie: Film): void {
  const favorites = loadFavoritesFromLocalStorage();
  favorites.push(movie);
  saveFavoritesToLocalStorage(favorites);
}

export function removeMovieFromFavorites(movieId: number): void {
  let favorites = loadFavoritesFromLocalStorage();
  favorites = favorites.filter((movie) => movie.id !== movieId);
  saveFavoritesToLocalStorage(favorites);
}

export function loadSortTypeFromLocalStorage(): string {
  const sortType = localStorage.getItem("sortType");
  return sortType ? sortType : "episode-up";
}

export function saveSortTypeToLocalStorage(sortType: string): void {
  localStorage.setItem("sortType", sortType);
}

export function loadLangFromLocalStorage(): string {
  const lang = localStorage.getItem("lang");
  return lang ? lang : "en";
}

export function saveLangToLocalStorage(lang: string): void {
  localStorage.setItem("lang", lang);
}
