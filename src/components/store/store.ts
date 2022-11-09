import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartSlice from "./cartReducer/cartSlice";
import orderSlice from "./orderReducer/orderSlice";
import searchCatalogSlice from "./searchCategoryReducer/searchCatalogSlice";
//import { apiSlice } from "../../API/ApiSlice";   //!   RTKQwery

// const stringMiddleware = () => (next) => (action) => {         //!   RTKQwery
//    if (typeof action === 'string') {
//       return next({
//          type: action
//       })
//    }
//    return next(action)
// }

export const store = configureStore({
   reducer: {
      search: searchCatalogSlice,
      cart: cartSlice,
      order: orderSlice,
      //[apiSlice.reducerPath]: apiSlice.reducer,         //!   RTKQwery
      },
   // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware, apiSlice.middleware),         //!   RTKQwery
   // devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>