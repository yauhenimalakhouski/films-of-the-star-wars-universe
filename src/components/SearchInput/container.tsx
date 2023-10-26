// import { fetchFilms } from "@/services/api";
import { useGetFilmsQuery } from "@/store/services/api";
import { SearchInput } from "./component";

export async function SearchInputContainer(){
    // const films = await fetchFilms();
    const {data: films, isFetching} = useGetFilmsQuery(undefined);
    
  return <SearchInput films = {films}/>;
};
