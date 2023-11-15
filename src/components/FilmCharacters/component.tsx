"use client";

import classNames from "classnames";
import styles from "./styles.module.css";
import { Button } from "../Button/component";
import { useEffect, useState } from "react";
import { CharacterType} from "@/types/types";
import { Character} from "../Character/component";

type CompProps = {
  characters: CharacterType[];
};

export const FilmCharacters = ({ characters }: CompProps) => {
  const [filmCharacters, setFilmCharacters] = useState<CharacterType[]>(
    characters.slice()
  );
  const [currentFilmCharacters, setCurrentFilmCharacters] = useState<
    CharacterType[]
  >([]);
  const [isBtnShown, setIsBtnShown] = useState<boolean>(true);
  const [charactersCount, setCharactersCount] = useState<number>(8);

  useEffect(() => {
    if (filmCharacters.length >= 8) {
      setCurrentFilmCharacters(
        currentFilmCharacters.concat(...filmCharacters.slice(0, 8))
      );
    } else {
      setCurrentFilmCharacters(
        currentFilmCharacters.concat(...filmCharacters.slice(0))
      );
      setIsBtnShown(false);
    }
  }, [charactersCount]);

  return (
    <div className={styles.root}>
      <h3 className={styles.main_characters_title}>
        <span>Main characters</span>
      </h3>
      <ol className={styles.characters}>
        {currentFilmCharacters.map((character) => (
          <li key={character.id}><Character character={character}/></li>
        ))}
      </ol>
      <Button
        type={`btn_show_more_characters`}
        className={
          isBtnShown
            ? styles.btn_show_more_characters_show
            : styles.btn_show_more_characters_hide
        }
        onClick={() => {
          setFilmCharacters(filmCharacters.splice(8));
          setCharactersCount(charactersCount + 8);
        }}
      >
        Show more characters
      </Button>
    </div>
  );
};
