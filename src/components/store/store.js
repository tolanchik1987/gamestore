import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartSlice from "./cartReducer/cartSlice";
import searchCatalogSlice from "./searchCategoryReducer/searchCatalogSlice";
import { apiSlice } from "../../API/ApiSlice";

const stringMiddleware = () => (next) => (action) => {
   if (typeof action === 'string') {
      return next({
         type: action
      })
   }
   return next(action)
}

export const store = configureStore({
   reducer: {
      search: searchCatalogSlice,
      cart: cartSlice,
      [apiSlice.reducerPath]: apiSlice.reducer,
      },
   middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware, apiSlice.middleware),
   devTools: process.env.NODE_ENV !== 'production'
});
