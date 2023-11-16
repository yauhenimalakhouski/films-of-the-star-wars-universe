import { Film } from "@/types/types";
import Image from "next/image";
import moment from "moment";
import styles from "./styles.module.css";
import { FILMS_IMG } from "@/consts/filmsImg";

type CompProps = {
  film: Film;
};

export const FilmPageDescription = ({ film }: CompProps) => {
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
        <h2 className={styles.title}>About film</h2>
        <ul className={styles.about_film}>
          <li className={styles.release_date}>
            <span>Year of production</span>
            <span> {release}</span>
          </li>
          <li className={styles.country}>
            <span>Country</span>
            <span>USA</span>
          </li>
          <li className={styles.genre}>
            <span>Genre</span>
            <span>фантастика, фэнтези, боевик, приключения</span>
          </li>
          <li className={styles.director}>
            <span>Director</span>
            <span>{film.director}</span>
          </li>
          <li className={styles.screenwriter}>
            <span>Writer</span>
            <span>{film.director}</span>
          </li>
          <li className={styles.producer}>
            <span>Producer</span>
            <span>{film.producer}</span>
          </li>
        </ul>
      </div>
      <div className={styles.film_text}>{film.opening_crawl}</div>
    </div>
  );
};
