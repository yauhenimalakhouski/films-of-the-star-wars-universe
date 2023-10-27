import { createSlice } from "@reduxjs/toolkit";

export const searchFilmsSlice = createSlice({
  name: "searchFilms",
  initialState: "",
  reducers: {
    putSearchString: (state, { payload }) => {
      state = state[payload];
    },
  },
});
