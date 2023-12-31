import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import { loggerMiddleware } from "./middlewares/logger";
import { searchFilmsSlice } from "./features/searchFilms";
import { favoritesSlice } from "./features/favorites";
import { userSettingsSlice } from "./features/userSettings";



export const store = configureStore({
  reducer: {
    searchFilms: searchFilmsSlice.reducer,
    favorites: favoritesSlice.reducer,
    userSettings: userSettingsSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api.middleware, loggerMiddleware,] as const,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

