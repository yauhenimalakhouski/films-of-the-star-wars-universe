"use client";

import { Film } from "@/types/types";
import Image from "next/image";
import moment from "moment";
import styles from "./styles.module.css";
import { FILMS_IMG } from "@/consts/filmsImg";
import { RU } from "@/consts/dictionaries/ru";
import { EN } from "@/consts/dictionaries/en";
import { useAppSelector } from "@/store/reduxHooks/reduxHooks";
import { selectLang } from "@/store/features/userSettings/selectors";

type CompProps = {
  film: Film;
};

export const FilmPageDescription = ({ film }: CompProps) => {
  const lang = useAppSelector(selectLang);
  if (!film) {
    return null;
  }
  const release = moment(`${film.release_date}`).format("YYYY MMMM Do");

  return (
    <div className={styles.root}>
      <div className={styles.film_cover_wrapper}>
        <Image
          className={styles.film_cover}
          fill={true}
          src={`${FILMS_IMG[film.id - 1]}`}
          alt="film"
          priority
        />
      </div>
      <div className={styles.description}>
        <div className={styles.episode_number}>{`Episode ${film.episode_id}`}</div>
        <div className={styles.episode_title}>{film.title}</div>
        <h2 className={styles.title}>{lang === "en" ? EN.about_film : RU.about_film}</h2>
        <ul className={styles.about_film}>
          <li className={styles.release_date}>
            <span>{lang === "en" ? EN.year_release : RU.year_release}</span>
            <span> {release}</span>
          </li>
          <li className={styles.country}>
            <span>{lang === "en" ? EN.country : RU.country}</span>
            <span>{lang === "en" ? EN.usa : RU.usa}</span>
          </li>
          <li className={styles.genre}>
            <span>{lang === "en" ? EN.genre : RU.genre}</span>
            <span>{lang === "en" ? EN.genre_info : RU.genre_info}</span>
          </li>
          <li className={styles.director}>
            <span>{lang === "en" ? EN.director : RU.director}</span>
            <span>{film.director}</span>
          </li>
          <li className={styles.screenwriter}>
            <span>{lang === "en" ? EN.writer : RU.writer}</span>
            <span>{film.director}</span>
          </li>
          <li className={styles.producer}>
            <span>{lang === "en" ? EN.producer : RU.producer}</span>
            <span>{film.producer}</span>
          </li>
        </ul>
      </div>
      <div className={styles.film_text}>{film.opening_crawl}</div>
    </div>
  );
};
