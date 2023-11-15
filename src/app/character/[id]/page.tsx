import { fetchCharacter } from "@/services/api";

type PageProps = {
    params: {id:number};
}



export default async function ChracterPage({params:{id}}:PageProps){
    const character = await fetchCharacter(id);
    if(!character){
        return null;
    }
    return <div>{character.name}</div>
}