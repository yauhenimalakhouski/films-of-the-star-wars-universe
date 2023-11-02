import { Film } from "@/types/types";
import { Button } from "../Button/component";
import { useState } from "react";

type CompProps = {
  favoritesFilms: Film[];
};

export const Favorites = ({ favoritesFilms }: CompProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <div>
      <Button
        onClick={() => {
          isOpened ? setIsOpened(false) : setIsOpened(true);
        }}
      >
        Favorites films
      </Button>
      <div>
        {isOpened &&
          favoritesFilms.map((film) => <div key={film.id}>{film.title}</div>)}
      </div>
    </div>
  );
};
