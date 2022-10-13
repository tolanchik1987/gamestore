import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartReducer/cartSlice";
import searchCatalogSlice from "./searchCategoryReducer/searchCatalogSlice";

export const store = configureStore({
   reducer: {
      search: searchCatalogSlice,
      cart: cartSlice,
   },
});
