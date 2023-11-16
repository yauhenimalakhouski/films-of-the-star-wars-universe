import { FILMS_IMG } from "@/consts/filmsImg";
import { Film } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.css";

type CompProps = {
  movie: Film;
};

export const MovieLink = ({ movie }: CompProps) => {
  return (
    <div className={styles.root}>
      <Link href={`/film/${movie.id}`} className={styles.link}>
        <div className={styles.film_img_wrapper}>
          <Image
            fill={true}
            src={`${FILMS_IMG[movie.id - 1]}`}
            alt="film"
            priority
            className={styles.film_img}
          />
        </div>
        <div>Episode {movie.episode_id}</div>
        <div>{movie.title}</div>
      </Link>
    </div>
  );
};
