"use client";

import { CharacterType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { useAppSelector } from "@/store/reduxHooks/reduxHooks";
import { selectLang } from "@/store/features/userSettings/selectors";
import { RU } from "@/consts/dictionaries/ru";
import { EN } from "@/consts/dictionaries/en";

type CompProps = {
  character: CharacterType;
};

export const Character = ({ character }: CompProps) => {
  const lang = useAppSelector(selectLang);
  return (
    <>
      <Link href={`/character/${character.id}`} className={styles.link}>
        <div className={styles.image_wrapper}>
          <Image
            priority
            fill={true}
            src={character.image}
            alt="character"
            className={styles.character_photo}
          />
        </div>
        <div className={styles.character_description}>
          <div className={styles.name}>{character.name}</div>
          <div className={styles.homeworld}>
            <span>{lang === "en" ? EN.home_colon : RU.home_colon}</span>
            <span>{character.homeworld}</span>
          </div>
          <div className={styles.born}>
            <span>{lang === "en" ? EN.born_colon : RU.born_colon}</span>
            <span>{character.birth_year}</span>
          </div>
          <div className={styles.species}>
            <span>{lang === "en" ? EN.species_colon : RU.species_colon}</span>
            <span>{character.species}</span>
          </div>
        </div>
      </Link>
    </>
  );
};
