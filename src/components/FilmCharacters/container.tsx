"use client";
import { useGetCharactersQuery } from "@/store/services/api";
import { Character, Film } from "@/types/types";
import { FilmCharacters } from "./component";

type CompProps = {
  film: Film;
};

export const FilmCharactersContainer = ({ film }: CompProps) => {
  const filmCharacters = film.characters;
  const {
    data: characters,
    isFetching,
    isSuccess,
  } = useGetCharactersQuery(undefined);

  if (!characters) {
    return null;
  }

  const currentFilmCharacters = filmCharacters.map(
    (characterId) => characters[+characterId - 1]
  );

  return <FilmCharacters characters={currentFilmCharacters} />;
};
