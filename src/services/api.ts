import { CharacterType, Film } from "@/types/types";

export async function fetchFilms(): Promise<Film[]> {
  const response = await fetch(
    "https://desfarik.github.io/star-wars/api/film/all.json"
  );

  if (!response.ok) {
    throw new Error("Films data has not been received");
  }

  return await response.json();
}

export async function fetchFilm(id: number): Promise<Film> {
  const response = await fetch(
    `https://desfarik.github.io/star-wars/api/film/${id}.json`
  );

  if (!response.ok) {
    throw new Error("Film data has not been received");
  }

  return await response.json();
}

export async function fetchCharacter(id: number): Promise<CharacterType> {
  const response = await fetch(
    `https://desfarik.github.io/star-wars/api/people/${id}.json`
  );

  if(!response.ok){
    throw new Error("Character data has not been received");
  }

  return await response.json();
}
