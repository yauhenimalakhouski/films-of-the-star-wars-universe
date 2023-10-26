import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://desfarik.github.io/star-wars/api/",
  }),
  endpoints: (builder) => ({
    getFilms: builder.query({
      query: () => ({
        url: "all.json",
      }),
    //   providesTags: (result) =>
    //     (result || [])
    //       .map(({ id }) => ({ type: "Films", id }))
    //       .concat({ type: "Films", id: "LIST" }),
    }),
  }),
});

export const {
    useGetFilmsQuery,
} = api;