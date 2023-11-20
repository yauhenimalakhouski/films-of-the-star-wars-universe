"use client";

import styles from "./styles.module.css";
import { Button } from "../Button/component";
import { useEffect, useState } from "react";
import { CharacterType} from "@/types/types";
import { Character} from "../Character/component";
import { useAppSelector } from "@/store/reduxHooks/reduxHooks";
import { selectLang } from "@/store/features/userSettings/selectors";
import { EN } from "@/consts/dictionaries/en";
import { RU } from "@/consts/dictionaries/ru";

type CompProps = {
  characters: CharacterType[];
};

export const FilmCharacters = ({ characters }: CompProps) => {
  const lang = useAppSelector(selectLang);
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
        <span>{lang === "en" ? EN.main_characters : RU.main_characters}</span>
      </h3>
      <ol className={styles.characters}>
        {currentFilmCharacters.map((character) => (
          <li key={character.id} className={styles.character}><Character character={character}/></li>
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
        {lang === "en" ? EN.show_characters : RU.show_characters}
      </Button>
    </div>
  );
};
