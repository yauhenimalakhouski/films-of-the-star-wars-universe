import { Film } from "@/types/types";
import { Movie } from "../Movie/component";

import stylesComponent from "./stylesComponent.module.css"
import classNames from "classnames";

type CompProps = {
  films: Film[];
  filmsView: string;
};

export const Films = ({ films, filmsView }: CompProps) => {
  return (
    <div className={classNames(stylesComponent.root, {
      [stylesComponent.table]: filmsView === "table",
      [stylesComponent.tile]: filmsView === "tile",
    })}>
      {films.map((film) => (
        <Movie key={film.id} film={film} filmsView = {filmsView}/>
      ))}
    </div>
  );
};
