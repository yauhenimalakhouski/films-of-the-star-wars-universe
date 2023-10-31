import { RootState } from "@/store";

export const selectSearchFilmsValue = (state: RootState) =>
  state.searchFilms.currentSearch;
