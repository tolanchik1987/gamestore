import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartReducer/cartSlice";
import catalogSlice from "./catalogReducer/catalogSlice";

export const store = configureStore({
   reducer: {
      catalog: catalogSlice,
      cart: cartSlice,
   },
});
