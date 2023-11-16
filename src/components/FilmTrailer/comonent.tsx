import { FILMS_TRAILER_URLS } from "@/consts/filmTrailerUrls";
import styles from "./styles.module.css";
type CompProps = {
  filmId: number;
};

export const FilmTrailer = ({ filmId }: CompProps) => {
  return (
    <div className={styles.root}>
      <iframe
        className={styles.trailer}
        src={FILMS_TRAILER_URLS[+filmId-1]}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
