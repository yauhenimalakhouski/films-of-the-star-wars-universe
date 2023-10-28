import { fetchFilms } from "@/services/api"
import { Films } from "./component"

export async function FilmsContainer(){
    const films = await fetchFilms();
    return <Films films = {films}></Films>
}