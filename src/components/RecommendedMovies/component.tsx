"use client";

import { Film } from "@/types/types";
import styles from "./styles.module.css";
import { MovieLink } from "../MovieLink/component";
import { useAppSelector } from "@/store/reduxHooks/reduxHooks";
import { selectLang } from "@/store/features/userSettings/selectors";
import { EN } from "@/consts/dictionaries/en";
import { RU } from "@/consts/dictionaries/ru";

type CompProps = {
  recommendedMovies: Film[];
};

export const RecommendedMovies = ({ recommendedMovies }: CompProps) => {
  const lang = useAppSelector(selectLang);
  return (
    <div className={styles.root}>
      <h3>{lang === "en" ? EN.like_film : RU.like_film}</h3>
      <div className={styles.more_films}>
        {recommendedMovies.map((movie) => (
          <MovieLink key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
