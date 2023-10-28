import { Film } from "@/types/types";
import { Button } from "../Button/component"

type CompProps = {
    films: Film[];
  };
  

export const Favorites = ({films}: CompProps) => {
    return (<div>
        <Button>Favorites films</Button>
        <div>{films.map(film => <div></div>)}</div>
    </div>)
}