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
  filmsView: string;
};

export const Movie = ({ film, filmsView }: CompProps) => {
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
    <div className={classNames(styles.root, {
      [styles.table]: filmsView === "table",
    })}>
      <Link href={`/film/${film.id}`}>
        <Image
          width={300}
          height={300}
          src={`${FILMS_IMG[film.id - 1]}`}
          alt="film"
          priority
        />
      </Link>
      <div>
        <div>
          <div>
            <Link href={`/film/${film.id}`}>
              <div>{`Episode ${film.episode_id}`}</div>
              <div>{`${film.title}`}</div>
            </Link>
            <div>{`${film.release_date}`}</div>
            <div>{`${film.producer}`}</div>
          </div>
          <Button onClick={handleToggleFavorite}>
            {isFavorite ? "remove" : "add"}
          </Button>
        </div>
        <div>{film.opening_crawl}</div>
      </div>
    </div>
  );
};
