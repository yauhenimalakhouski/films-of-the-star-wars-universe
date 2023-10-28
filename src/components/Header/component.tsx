import Image from "next/image";
import Link from "next/link";
import { SearchInputContainer } from "../SearchInput/container";
import { ThemeButton } from "../ThemeButton/component";



export const Header = () => {
  return (
    <header>
      <div>
        <Link href="/">
          <Image src="icon.svg" width="75" height="75" alt="Logo" priority />
        </Link>
      </div>
      <div className="search_bar">
        <SearchInputContainer />
      </div>
      <div className="settings">
        <ThemeButton/>
        {/* <LocalizationButton />
        <Favorites /> */}
      </div>
    </header>
  );
};