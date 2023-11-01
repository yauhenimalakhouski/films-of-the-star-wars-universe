import { Movie } from "@/components/Movie/component";
import { fetchFilm } from "@/services/api";
type PageProps = {
  params: { id: number };
};

export default async function FilmPage({ params: { id } }: PageProps) {
  const film = await fetchFilm(id);
  if (!film) {
    return null;
  }

  return (
    <div>
      <Movie film={film} filmsView={"table"}></Movie>
    </div>
  );
}
