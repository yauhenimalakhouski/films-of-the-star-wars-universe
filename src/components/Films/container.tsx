"use client";
import { useGetFilmsQuery } from "@/store/services/api";
import { Films } from "./component"
import { useEffect } from "react";
import { loadFavoritesFromLocalStorage } from "@/utils/localStorage";
import { store } from "@/store";
import { addFilm } from "@/store/features/favorites";

export const FilmsContainer = () => {
    const {data: films, isFetching, isSuccess} = useGetFilmsQuery(undefined);
    if(isSuccess){
        return <Films films = {films}></Films>
    }
   
}