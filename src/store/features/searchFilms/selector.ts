import { RootState } from "@/store";

export const searchFilmsModule = (state: RootState) =>
  state.searchFilms.currentSearch;
