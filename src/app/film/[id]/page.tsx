import { FilmPageDescription } from "@/components/FilmPageDescription/component";
import { Movie } from "@/components/Movie/component";
import { fetchFilm } from "@/services/api";

import styles from "./styles.module.css";
import { FilmTrailer } from "@/components/FilmTrailer/comonent";

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
      {/* <Movie film={film} filmsViewType={"table"}></Movie> */}
      <FilmPageDescription film={film}/>
      <FilmTrailer filmId={id} />
    </div>
  );
}
