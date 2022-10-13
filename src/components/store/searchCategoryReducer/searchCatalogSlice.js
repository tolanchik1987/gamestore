import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   categoryId: 0,
};

const searchCatalogSlice = createSlice({
   name: "searchCategory",
   initialState,
   reducers: {
      setCategoryId: (state, action) => {
         state.categoryId = action.payload;
      },
   },
});

export const { setCategoryId } = searchCatalogSlice.actions;
export default searchCatalogSlice.reducer;
