import { Film } from "@/types/types";
import { Movie } from "../Movie/component";

import stylesComponent from "./stylesComponent.module.css"
import classNames from "classnames";

type CompProps = {
  films: Film[];
  filmsViewType: string;
};

export const Films = ({ films, filmsViewType }: CompProps) => {
  return (
    <div className={classNames(stylesComponent.root, {
      [stylesComponent.table]: filmsViewType === "table",
      [stylesComponent.tile]: filmsViewType === "tile",
    })}>
      {films.map((film) => (
        <Movie key={film.id} film={film} filmsViewType = {filmsViewType}/>
      ))}
    </div>
  );
};
