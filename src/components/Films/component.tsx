import { Film } from "@/types/types";
import { Movie } from "../Movie/component";
import { loadSortTypeFromLocalStorage } from "@/utils/localStorage";
import { getSortFn } from "@/utils/sotrFn";

type CompProps = {
  films: Film[];
};

export const Films = ({ films }: CompProps) => {
  
  const sortType = getSortFn(loadSortTypeFromLocalStorage());

  const currentFilmsSorted = films.slice().sort(sortType);
  
  return (
    <div>
      {currentFilmsSorted.sort(sortType).map((film) => (
        <Movie key={film.id} film={film}/>
      ))}
    </div>
  );
};
