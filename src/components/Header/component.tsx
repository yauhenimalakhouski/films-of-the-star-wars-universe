import Image from "next/image";
import Link from "next/link";
import { SearchInputContainer } from "../SearchInput/container";

// type AppProps = {
//     films: 
// }



export const Header = () => {


  return (
    <header>
      <div>
        <Link href="/">
          <Image src="icon.svg" width="75" height="75" alt="Logo" priority />
        </Link>
      </div>
      <div>
        <SearchInputContainer/>
      </div>
    </header>
  );
};
