import { createSlice } from "@reduxjs/toolkit";

interface SearchCatalogSlice {
   categoryId: number,
}

const initialState: SearchCatalogSlice = {
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
