import { loadLangFromLocalStorage, loadSortTypeFromLocalStorage } from "@/utils/localStorage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface sortType {
    sortType: string;
    lang: string;
}

let initialState: sortType = {
    sortType: "",
    lang: "en",
}

if(typeof window !== "undefined") {
    initialState.sortType = loadSortTypeFromLocalStorage();
    initialState.lang = loadLangFromLocalStorage();
}

export const userSettingsSlice = createSlice({
    name:'userSettings',
    initialState,
    reducers:{
        saveSortTypeInStore: (state, action: PayloadAction<string>) => {
            state.sortType = action.payload;
        },
        saveLang: (state, action: PayloadAction<string>) => {
            state.lang = action.payload;
        },
    },
})

export const {saveSortTypeInStore, saveLang} = userSettingsSlice.actions;