import { Character, Film } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://desfarik.github.io/star-wars/api/",
  }),
  endpoints: (builder) => ({
    getFilms: builder.query<Film[], undefined>({
      query: () => ({
        url: "film/all.json",
      }),
    }),
    getCharacters: builder.query<Character[], undefined>({
      query: () => ({
        url: "/people/all.json",
      }),
    }),
  }),
});

export const { useGetFilmsQuery, useGetCharactersQuery } = api;
