"use client";

import classNames from "classnames";
import styles from "./styles.module.css";
import { Button } from "../Button/component";
import { useState } from "react";
import { useGetCharactersQuery } from "@/store/services/api";

type CompProps = {
    filmId:number;
}


export const FilmCharacters = ({filmId}:CompProps) => {
  const { data: characters, isFetching, isSuccess } = useGetCharactersQuery(undefined);

  const [isBtnShown, setIsBtnShown] = useState<boolean>(true);
  if(!characters){
    return null;
  }

  let currentFilmCharacters = characters.slice();
  

  return (
    <div className={styles.root}>
      <h3 className={styles.main_characters_title}>
        <span>Main characters</span>
      </h3>
      <ol className={styles.characters}>{currentFilmCharacters.map((character)=><li>{character.name}</li>)}</ol>
      <div className={styles.loader}>
        <div className={classNames(styles.inner, styles.one)} />
        <div className={classNames(styles.inner, styles.two)} />
        <div className={classNames(styles.inner, styles.three)} />
      </div>
      <Button
        type={`btn_show_more_characters`}
        className={
          isBtnShown
            ? styles.btn_show_more_characters_show
            : styles.btn_show_more_characters_hide
        }
        onClick={() => {
          setIsBtnShown(false);
        }}
      >
        Show more characters
      </Button>
    </div>
  );
};
