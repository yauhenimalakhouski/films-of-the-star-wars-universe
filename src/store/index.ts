import { configureStore } from "@reduxjs/toolkit";
// import { searchFilmsSlice } from "./features/searchFilms";
import { api } from "./services/api";



export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    // searchFilms: searchFilmsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api.middleware,],
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
