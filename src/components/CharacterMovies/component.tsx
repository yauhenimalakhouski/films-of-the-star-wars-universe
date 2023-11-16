import { CharacterType, Film } from "@/types/types";
import styles from "./styles.module.css";
import { MovieLink } from "../MovieLink/component";

type CompProps = {
  characterMovies: Film[];
  character: CharacterType;
};

export const CharacterMovies = ({ characterMovies, character }: CompProps) => {
  return (
    <div>
      <h1 className={styles.title_films}>
        <span>Films with the participation of </span>
        <span className={styles.title_films_name}>{character.name}</span>
      </h1>
      <div className={styles.films_wrapper}>
        {characterMovies.map((movie) => (
          <MovieLink key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
