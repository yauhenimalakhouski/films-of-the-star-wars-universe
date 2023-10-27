"use client"

// import { fetchFilms } from "@/services/api";
import { useGetFilmsQuery } from "@/store/services/api";
import { SearchInput } from "./component";

export function SearchInputContainer(){
    // const films = await fetchFilms();
    const {data: films, isFetching, isSuccess} = useGetFilmsQuery(undefined);
    if(isSuccess){
      return <SearchInput films = {films}/>;
    }
    
};
