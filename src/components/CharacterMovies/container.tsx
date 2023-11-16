"use client";

import { CharacterType } from "@/types/types";
import { CharacterMovies } from "./component";
import { useGetFilmsQuery } from "@/store/services/api";

type CompProps = {
  character: CharacterType;
};

export const CharacterMoviesContainer = ({ character }: CompProps) => {
  const { data: movies, isSuccess, isLoading } = useGetFilmsQuery(undefined);

  if (!movies) {
    return null;
  }

  const characterMoviesIds = character.films.map(id=>+id);
  const characterMovies = movies.filter((movie) =>
    characterMoviesIds.includes((movie.id))
  );

  return (
    <CharacterMovies characterMovies={characterMovies} character={character} />
  );
};
