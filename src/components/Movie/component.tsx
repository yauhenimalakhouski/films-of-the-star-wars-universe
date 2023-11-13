"use client";

import { FILMS_IMG } from "@/consts/filmsImg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button/component";
import { Film } from "@/types/types";
import { useAppDispatch, useAppSelector } from "@/store/reduxHooks/reduxHooks";
import { selectFavoriteFilms } from "@/store/features/favorites/selector";
import { addFilm, removeFilm } from "@/store/features/favorites";

import styles from "./styles.module.css";
import classNames from "classnames";

type CompProps = {
  film: Film;
  filmsViewType: string;
};

export const Movie = ({ film, filmsViewType }: CompProps) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavoriteFilms);
  const isFavorite = favorites.some((favMovie) => favMovie.id === film.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFilm(film.id));
    } else {
      dispatch(addFilm(film));
    }
  };
  return (
    <div
      className={classNames(styles.root, {
        [styles.table]: filmsViewType === "table",
      })}
    >
      <Link href={`/film/${film.id}`} className={styles.film_link}>
        <Image
          className={styles.cover}
          fill={true}
          src={`${FILMS_IMG[film.id - 1]}`}
          alt="film"
          priority
        />
      </Link>
      <div className={styles.description}>
        <div className={styles.short_description}>
          <div>
            <Link href={`/film/${film.id}`} className={styles.text_link}>
              <div className={styles.episode_number}>{`Episode ${film.episode_id}`}</div>
              <div className={styles.episode_title}>{`${film.title}`}</div>
            </Link>
            <div className={styles.release_date}>{`${film.release_date}`}</div>
            <div className={styles.film_producer}>{`${film.producer}`}</div>
          </div>
          <Button onClick={handleToggleFavorite} 
          type = {`btn_favorite`}
          switchType={isFavorite?"active":""}>  
          </Button>
        </div>
        <div className={styles.film_text}>{film.opening_crawl}</div>
      </div>
    </div>
  );
};
