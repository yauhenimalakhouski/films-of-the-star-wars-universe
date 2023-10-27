import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SearchState {
  currentSearch: string;
}

const initialState: SearchState = {
  currentSearch: "",
};

export const searchFilmsSlice = createSlice({
  name: "searchFilms",
  initialState,
  reducers: {
    putSearchString: (state, action: PayloadAction<string>) => {
      state.currentSearch = action.payload;
    },
  },
});
