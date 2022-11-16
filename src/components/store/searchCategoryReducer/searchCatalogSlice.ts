import { createSlice } from "@reduxjs/toolkit";
import { ISearchCatalogSlice } from "../../types/type";

const initialState: ISearchCatalogSlice = {
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
