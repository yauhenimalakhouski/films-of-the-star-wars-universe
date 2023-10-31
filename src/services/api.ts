import { Film } from "@/types/types";

export async function fetchFilms(): Promise<Film[]> {
  const response = await fetch(
    "https://desfarik.github.io/star-wars/api/film/all.json"
  );

  if (!response.ok) {
    throw new Error("Error");
  }

  return await response.json();
}

export async function fetchFilm(id:number): Promise<Film> {
  const response = await fetch(
    `https://desfarik.github.io/star-wars/api/film/${id}.json`
  );

  if (!response.ok) {
    throw new Error("Error");
  }

  return await response.json();
}
