import { RootState } from "@/store";

export const selectSortTypeValue = (state:RootState) => state.userSettings.sortType;