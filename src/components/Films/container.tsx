"use client";
import { useGetFilmsQuery } from "@/store/services/api";
import { Films } from "./component";
import { getSortFn } from "@/utils/sotrFn";

import { useAppSelector } from "@/store/reduxHooks/reduxHooks";
import { selectSearchFilmsValue } from "@/store/features/searchFilms/selector";
import { Fragment, useEffect, useState } from "react";
import { selectSortTypeValue } from "@/store/features/userSettings/selectors";
import { Button } from "../Button/component";

import styles from "./stylesContainer.module.css";
import stylesComponent from "./stylesComponent.module.css"
import { FilmsSortBar } from "../FilmsSortBar/component";
import classNames from "classnames";
import { SkeletonMovie } from "../Movie/loading";

const LOCAL_STORAGE_KEY: string = "filmViewType";
let savedViewType;

const skeletonArray = [1, 2, 3, 4, 5, 6, 7];

export const FilmsContainer = () => {
  const { data: films, isLoading, isSuccess } = useGetFilmsQuery(undefined);

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

  if(isLoading){
    return <Fragment>
    <div className={styles.root}>
      <FilmsSortBar />
      <div className={styles.view_control}>
        <Button
          switchType={filmsViewType==="table"?"selected_table":""}
          type={`btn_table_view`}
        />
        <Button
        switchType={filmsViewType==="tile"?"selected_tile":""}
          type={`btn_tile_view`}
          onClick={() => {
            if (filmsViewType !== "tile") {
              setFilmsViewType("tile");
            }
          }}
        />
      </div>
    </div>
    <div className={classNames(stylesComponent.root, {
      [stylesComponent.table]: filmsViewType === "table",
      [stylesComponent.tile]: filmsViewType === "tile",
    })}>
      {
        skeletonArray.map((item, index) => <SkeletonMovie filmsViewType={filmsViewType} key={index}/>)
      }
    </div>
  </Fragment>
  }

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
      <div className={styles.root}>
        <FilmsSortBar />
        <div className={styles.view_control}>
          <Button
            switchType={filmsViewType==="table"?"selected_table":""}
            type={`btn_table_view`}
            onClick={() => {
              if (filmsViewType !== "table") {
                setFilmsViewType("table");
              }
            }}
          />
          <Button
          switchType={filmsViewType==="tile"?"selected_tile":""}
            type={`btn_tile_view`}
            onClick={() => {
              if (filmsViewType !== "tile") {
                setFilmsViewType("tile");
              }
            }}
          />
        </div>
      </div>
      <Films films={currentFilmsSorted} filmsViewType={filmsViewType} />
    </Fragment>
  );
};
