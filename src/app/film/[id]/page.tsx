import { FilmPageDescription } from "@/components/FilmPageDescription/component";
import { Movie } from "@/components/Movie/component";
import { fetchFilm } from "@/services/api";

import styles from "./styles.module.css";
import { FilmTrailer } from "@/components/FilmTrailer/comonent";
import { FilmCharactersContainer } from "@/components/FilmCharacters/container";
import { RecommendedMoviesContainer } from "@/components/RecommendedMovies/container";

type PageProps = {
  params: { id: number };
};

export default async function FilmPage({ params: { id } }: PageProps) {
  const film = await fetchFilm(id);
  if (!film) {
    return null;
  }

  return (
    <div className={styles.root}>  {/*film_wrapper*/}
      <FilmPageDescription film={film}/>
      <FilmTrailer filmId={id} />
      <FilmCharactersContainer film={film}/>
      <RecommendedMoviesContainer episodeId={film.episode_id}/>
    </div>
  );
}
