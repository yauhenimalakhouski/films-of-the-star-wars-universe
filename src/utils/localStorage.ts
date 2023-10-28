import { Film } from "@/types/types";

export function loadFavoritesFromLocalStorage(): Film[] {
    const favoritesData = localStorage.getItem('favorites');
    return favoritesData ? JSON.parse(favoritesData) : [];
  }
  
  export function saveFavoritesToLocalStorage(movies: Film[]): void {
    localStorage.setItem('favorites', JSON.stringify(movies));
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