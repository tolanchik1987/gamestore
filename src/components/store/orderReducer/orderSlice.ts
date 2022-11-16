import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import { GameType, IOrder } from "../../types/type";

const initialState: IOrder = {
   orderData: [],
   orderTotalPrice: 0,
};

const orderSlice = createSlice({
   name: "order",
   initialState,
   reducers: {
      setNewOrder: (state, action: PayloadAction<GameType[]>) => {
         state.orderData.push(...action.payload);
      },
      setOrderTotalPrice: (state, action: PayloadAction<number>) => {  
         state.orderTotalPrice = action.payload;
      },
   },
});

export const { setNewOrder, setOrderTotalPrice } = orderSlice.actions;
export default orderSlice.reducer;
