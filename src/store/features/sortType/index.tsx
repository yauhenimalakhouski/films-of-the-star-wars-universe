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

export const sortTypeSlice = createSlice({
    name:'sortType',
    initialState,
    reducers:{
        putSortType: (state, action: PayloadAction<string>) => {
            state.sortType = action.payload;
        },
    },
})