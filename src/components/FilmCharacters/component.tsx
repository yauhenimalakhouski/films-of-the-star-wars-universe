"use client";

import classNames from "classnames";
import styles from "./styles.module.css";
import { Button } from "../Button/component";
import { useState } from "react";

export const FilmCharacters = () => {
  const [isBtnShown, setIsBtnShown] = useState<boolean>(true);

  return (
    <div className={styles.root}>
      <h3 className={styles.main_characters_title}>
        <span>Main characters</span>
      </h3>
      <ol className={styles.characters}></ol>
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
        onClick={()=>{
            setIsBtnShown(false);
        }}
      >
        Show more characters
      </Button>
    </div>
  );
};
