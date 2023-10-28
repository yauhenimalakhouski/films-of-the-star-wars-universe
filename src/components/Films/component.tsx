import { FILMS_IMG } from "@/consts/filmsImg";
import { Film } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import styles from "./images/episode1.png";
import { Button } from "../Button/component";

type CompProps = {
  films: Film[];
};

export const Films = ({ films }: CompProps) => {
  const currentFilms = films;

  return (
    <div>
      {currentFilms.map((film) => (
        <div>
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
              <Button>add</Button>
            </div>
            <div>{film.opening_crawl}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
