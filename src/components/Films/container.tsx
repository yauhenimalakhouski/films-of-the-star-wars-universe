"use client";
import { useGetFilmsQuery } from "@/store/services/api";
import { Films } from "./component"

export const FilmsContainer = () => {
    const {data: films, isFetching, isSuccess} = useGetFilmsQuery(undefined);
    if(isSuccess){
        return <Films films = {films}></Films>
    }
   
}