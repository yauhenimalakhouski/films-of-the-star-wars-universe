import { RootState } from "@/store";

export const selectSortTypeValue = (state:RootState) => state.userSettings.sortType;

export const selectLang = (state:RootState) => state.userSettings.lang;