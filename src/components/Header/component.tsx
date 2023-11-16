import Image from "next/image";
import Link from "next/link";

import { ThemeButton } from "../ThemeButton/component";
import { LocalizationButton } from "../LocalizationButton/component";
import { SearchInput } from "../SearchInput/component";
import { FavoritesContainer } from "../Favorites/container";

import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={styles.root}>
      <div>
        <Link href="/">
          <Image
            src="/logo.svg"
            width={75}
            height={75}
            alt="Logo"
            priority
            className={styles.logo_img}
          />
        </Link>
      </div>
      <SearchInput className = {styles.search_position}/>
      <div className={styles.settings}>
        <ThemeButton />
        <LocalizationButton />
        <FavoritesContainer />
      </div>
    </header>
  );
};
