import { Film } from "@/types/types";
import { Button } from "../Button/component";
import { useState } from "react";

import styles from "./styles.module.css";
import Link from "next/link";

type CompProps = {
  favoritesFilms: Film[];
};

export const Favorites = ({ favoritesFilms }: CompProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
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
        Favorites films
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
