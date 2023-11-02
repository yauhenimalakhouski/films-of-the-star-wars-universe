"use client";
import { useGetFilmsQuery } from "@/store/services/api";
import { Films } from "./component";
import { getSortFn } from "@/utils/sotrFn";

import { useAppSelector } from "@/store/reduxHooks/reduxHooks";
import { selectSearchFilmsValue } from "@/store/features/searchFilms/selector";
import { Fragment, useEffect, useState } from "react";
import { selectSortTypeValue } from "@/store/features/userSettings/selectors";
import { Button } from "../Button/component";

import styles from "./styles.module.css";
import { FilmsSortBar } from "../FilmsSortBar/component";

const LOCAL_STORAGE_KEY: string = "filmViewType";
let savedViewType;

export const FilmsContainer = () => {
  const { data: films, isFetching, isSuccess } = useGetFilmsQuery(undefined);

  const searchTextFromStore = useAppSelector(selectSearchFilmsValue);
  const sortTypeValue = useAppSelector(selectSortTypeValue);
  const [searchText, setSearchText] = useState(searchTextFromStore);
  const [filmsViewType, setFilmsViewType] = useState<string>("tile");

  useEffect(() => {
    setSearchText(searchTextFromStore);
  }, [searchTextFromStore]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      savedViewType = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedViewType) {
        setFilmsViewType(savedViewType);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCAL_STORAGE_KEY, filmsViewType);
    }
  }, [filmsViewType]);

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
    <Fragment>
      <div>
        <FilmsSortBar />
        <div>
          <Button
            onClick={() => {
              if (filmsViewType !== "table") {
                setFilmsViewType("table");
              }
            }}
          >
            table
          </Button>
          <Button
            onClick={() => {
              if (filmsViewType !== "tile") {
                setFilmsViewType("tile");
              }
            }}
          >
            tile
          </Button>
        </div>
      </div>
      <Films films={currentFilmsSorted} filmsViewType={filmsViewType}></Films>;
    </Fragment>
  );
};
