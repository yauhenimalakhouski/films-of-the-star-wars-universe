import { Movie } from "@/components/Movie/component";
import { fetchFilm } from "@/services/api";
type PageProps = {
    params:{id:number}
}

export default async function ({params: {id }} :PageProps) {
    const movie = await fetchFilm(id);
    console.log(movie)
    if(movie){
        return <div>
        <Movie film = {movie}></Movie>
    </div>
    }
    
    
}