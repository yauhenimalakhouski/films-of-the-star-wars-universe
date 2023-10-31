import { Film } from "@/types/types";
import { Movie } from "../Movie/component";

type CompProps = {
  films: Film[];
};

export const Films = ({ films }: CompProps) => {
  const currentFilms = films;
  
  return (
    <div>
      {currentFilms.map((film) => (
        <Movie key={film.id} film={film}/>
      ))}
    </div>
  );
};
