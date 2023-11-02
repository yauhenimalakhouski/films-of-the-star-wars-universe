import { loadSortTypeFromLocalStorage } from "@/utils/localStorage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface sortType {
    sortType: string;
}

let initialState: sortType = {
    sortType: "",
}

if(typeof window !== "undefined") {
    initialState.sortType = loadSortTypeFromLocalStorage();
}

export const userSettingsSlice = createSlice({
    name:'userSettings',
    initialState,
    reducers:{
        saveSortTypeInStore: (state, action: PayloadAction<string>) => {
            state.sortType = action.payload;
        },
    },
})

export const {saveSortTypeInStore} = userSettingsSlice.actions;