"use client";

import { CharacterType } from "@/types/types";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/store/reduxHooks/reduxHooks";
import { selectLang } from "@/store/features/userSettings/selectors";
import { RU } from "@/consts/dictionaries/ru";
import { EN } from "@/consts/dictionaries/en";

type CompProps = {
  character: CharacterType;
};

export const CharacterPageDescription = ({ character }: CompProps) => {
  const lang = useAppSelector(selectLang);
  return (
    <div className={styles.root}>
      <div className={styles.image_wrapper}>
        <Image
          priority
          fill={true}
          src={character.image}
          alt="character"
          className={styles.character_photo}
        />
      </div>
      <div className={styles.character_info}>
        <h1 className={styles.character_name}>{character.name}</h1>
        <h2 className={styles.character_title}>
          {lang === "en" ? EN.biographical : RU.biographical}
        </h2>
        <ul className={styles.list}>
          <li className={styles.homeworld}>
            <span>{lang === "en" ? EN.homeworld : RU.homeworld}</span>
            <span className={styles.item__dotted}></span>
            <span>{character.homeworld}</span>
          </li>
          <li className={styles.born}>
            <span>{lang === "en" ? EN.born : RU.born}</span>
            <span className={styles.item__dotted}></span>
            <span>{character.birth_year}</span>
          </li>
        </ul>
        <h2 className={styles.character_title}>{lang === "en" ? EN.physical : RU.physical}</h2>
        <ul className={styles.list}>
          <li className={styles.species}>
            <span>{lang === "en" ? EN.species : RU.species}</span>
            <span className={styles.item__dotted}></span>
            <span>{character.species}</span>
          </li>
          <li className={styles.gender}>
            <span>{lang === "en" ? EN.gender : RU.gender}</span>
            <span className={styles.item__dotted}></span>
            <span>{character.gender}</span>
          </li>
          <li className={styles.height}>
            <span>{lang === "en" ? EN.height : RU.height}</span>
            <span className={styles.item__dotted}></span>
            <span>{character.height} centimeters</span>
          </li>
          <li className={styles.mass}>
            <span data-lang-key="mass">{lang === "en" ? EN.mass : RU.mass}</span>
            <span className={styles.item__dotted}></span>
            <span>{character.mass} kilograms</span>
          </li>
          <li className={styles.hair_color}>
            <span>{lang === "en" ? EN.hair_color : RU.hair_color}</span>
            <span className={styles.item__dotted}></span>
            <span>{character.hair_color}</span>
          </li>
          <li className={styles.eye_color}>
            <span>{lang === "en" ? EN.eye_color : RU.eye_color}</span>
            <span className={styles.item__dotted}></span>
            <span>{character.eye_color}</span>
          </li>
          <li className={styles.skin_color}>
            <span>{lang === "en" ? EN.skin_color : RU.skin_color}</span>
            <span className={styles.item__dotted}></span>
            <span>{character.skin_color}</span>
          </li>
          <li className={styles.more_info}>
            <Link href={character.wiki} target="_blank" className={styles.link}>
              <span className={styles.wiki}>{lang === "en" ? EN.more_information : RU.more_information}</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
