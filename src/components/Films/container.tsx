"use client";
import { useGetFilmsQuery } from "@/store/services/api";
import { Films } from "./component";
import { getSortFn } from "@/utils/sotrFn";

import { useAppSelector } from "@/store/reduxHooks/reduxHooks";
import { selectSearchFilmsValue } from "@/store/features/searchFilms/selector";
import { useEffect, useState } from "react";
import { selectSortTypeValue } from "@/store/features/sortType/selectors";
import { Button } from "../Button/component";

import styles from "./styles.module.css";

export const FilmsContainer = () => {
  const { data: films, isFetching, isSuccess } = useGetFilmsQuery(undefined);

  const searchTextFromStore = useAppSelector(selectSearchFilmsValue);
  const sortTypeValue = useAppSelector(selectSortTypeValue);
  const [searchText, setSearchText] = useState(searchTextFromStore);
  const [filmsView, setFilmsView] = useState<string>('tile');

  useEffect(() => {
    setSearchText(searchTextFromStore);
  }, [searchTextFromStore]);

  if (!films) {
    return null;
  }

  const sortTypeFn = getSortFn(sortTypeValue);

  const filteredFilms = films.slice().filter((film) => {
    return (
      film.title.toLowerCase().includes(searchText) ||
      String(film.episode_id).includes(searchText)
    );
  });

  const currentFilmsSorted = filteredFilms.sort(sortTypeFn);

  return (
    <div>
      <div>
        <div>
          <Button onClick={()=>{
            if(filmsView !== "table"){
              setFilmsView("table")
            }
          }}>table</Button>
          <Button onClick={()=>{
            if(filmsView !== "tile"){
              setFilmsView("tile")
            }
          }}>tile</Button>
        </div>
      </div>
      <Films films={currentFilmsSorted} filmsView = {filmsView}></Films>;
    </div>
  );
};
