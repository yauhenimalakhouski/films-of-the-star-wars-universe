import { CharacterType, Film } from "@/types/types";
import styles from "./styles.module.css";
import { MovieLink } from "../MovieLink/component";
import { selectLang } from "@/store/features/userSettings/selectors";
import { useAppSelector } from "@/store/reduxHooks/reduxHooks";
import { EN } from "@/consts/dictionaries/en";
import { RU } from "@/consts/dictionaries/ru";

type CompProps = {
  characterMovies: Film[];
  character: CharacterType;
};

export const CharacterMovies = ({ characterMovies, character }: CompProps) => {
  const lang = useAppSelector(selectLang);
  return (
    <div>
      <h1 className={styles.title_films}>
        <span>
          {lang === "en" ? EN.film_participation : RU.film_participation}
        </span>
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
