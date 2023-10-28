import { FILMS_IMG } from "@/consts/filmsImg";
import { Film } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import styles from "./images/episode1.png"

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
            {film.title}
            <Image width={300} height={300} src={`${FILMS_IMG[0]}`} alt="film" priority/>
          </Link>
        </div>
      ))}
    </div>
  );
};
