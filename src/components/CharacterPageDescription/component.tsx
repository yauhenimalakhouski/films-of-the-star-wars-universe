import { CharacterType } from "@/types/types";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

type CompProps = {
  character: CharacterType;
};

export const CharacterPageDescription = ({ character }: CompProps) => {
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
        <h2 className={styles.character_title}>Biographical information</h2>
        <ul className={styles.list}>
          <li className={styles.homeworld}>
            <span>Homeworld</span>
            <span className={styles.item__dotted}></span>
            <span>{character.homeworld}</span>
          </li>
          <li className={styles.born}>
            <span>Born</span>
            <span className={styles.item__dotted}></span>
            <span>{character.birth_year}</span>
          </li>
        </ul>
        <h2 className={styles.character_title}>Physical description</h2>
        <ul className={styles.list}>
          <li className={styles.species}>
            <span>Species</span>
            <span className={styles.item__dotted}></span>
            <span>{character.species}</span>
          </li>
          <li className={styles.gender}>
            <span>Gender</span>
            <span className={styles.item__dotted}></span>
            <span>{character.gender}</span>
          </li>
          <li className={styles.height}>
            <span>Height</span>
            <span className={styles.item__dotted}></span>
            <span>{character.height} centimeters</span>
          </li>
          <li className={styles.mass}>
            <span data-lang-key="mass">Mass</span>
            <span className={styles.item__dotted}></span>
            <span>{character.mass} kilograms</span>
          </li>
          <li className={styles.hair_color}>
            <span>Hair color</span>
            <span className={styles.item__dotted}></span>
            <span>{character.hair_color}</span>
          </li>
          <li className={styles.eye_color}>
            <span>Eye color</span>
            <span className={styles.item__dotted}></span>
            <span>{character.eye_color}</span>
          </li>
          <li className={styles.skin_color}>
            <span>Skin color</span>
            <span className={styles.item__dotted}></span>
            <span>{character.skin_color}</span>
          </li>
          <li className={styles.more_info}>
            <Link href={character.wiki} target="_blank" className={styles.link}>
              <span className={styles.wiki}>More information</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
