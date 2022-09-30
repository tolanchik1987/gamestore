import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   gameView: false,
};

const catalogSlice = createSlice({
   name: "catalog",
   initialState,
   reducers: {
      getViewCatalog: (state, action) => {
         state.gameView = action.payload;
      },
   },
});

export const { getViewCatalog } = catalogSlice.actions;
export default catalogSlice.reducer;
