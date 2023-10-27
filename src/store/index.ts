import { configureStore } from "@reduxjs/toolkit";
// import { searchFilmsSlice } from "./features/searchFilms";
import { api } from "./services/api";
import { loggerMiddleware } from "./middlewares/logger";
import { searchFilmsSlice } from "./features/searchFilms";



export const store = configureStore({
  reducer: {
    searchFilms: searchFilmsSlice.reducer,
    [api.reducerPath]: api.reducer,
    // searchFilms: searchFilmsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api.middleware, loggerMiddleware,] as const,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

