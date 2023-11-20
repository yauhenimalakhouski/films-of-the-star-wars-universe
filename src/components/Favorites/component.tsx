"use client";

import { Film } from "@/types/types";
import { Button } from "../Button/component";
import { useState } from "react";

import styles from "./styles.module.css";
import Link from "next/link";
import { useAppSelector } from "@/store/reduxHooks/reduxHooks";
import { selectLang } from "@/store/features/userSettings/selectors";
import { EN } from "@/consts/dictionaries/en";
import { RU } from "@/consts/dictionaries/ru";

type CompProps = {
  favoritesFilms: Film[];
};

export const Favorites = ({ favoritesFilms }: CompProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const lang = useAppSelector(selectLang);
  if (!favoritesFilms) {
    return null;
  }

  return (
    <div className={styles.root}>
      <Button
        type={`btn_favorites`}
        onClick={() => {
          isOpened ? setIsOpened(false) : setIsOpened(true);
        }}
      >
        {lang === "en" ? EN.button_favorites : RU.button_favorites}
      </Button>
      <div className={styles.favorites_films}>
        {isOpened &&
          favoritesFilms.map((film) => (
            <div key={film.id} className={styles.favorite_film}>
              <Link href={`/film/${film.id}`} className={styles.film_link}>
                {`Episode ${film.episode_id} - ${film.title}`}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
