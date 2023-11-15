import { CharacterType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

type CompProps = {
  character: CharacterType;
};

export const Character = ({ character }: CompProps) => {
  return (
    <>
      <Link href={`/character/${character.id}`}>
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
            <span>Home:</span>
            <span>{character.homeworld}</span>
          </div>
          <div className={styles.born}>
            <span>Born:</span>
            <span>{character.birth_year}</span>
          </div>
          <div className={styles.species}>
            <span>Species:</span>
            <span>{character.species}</span>
          </div>
        </div>
      </Link>
    </>
  );
};
