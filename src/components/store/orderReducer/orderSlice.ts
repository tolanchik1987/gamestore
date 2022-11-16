import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import { FormInputsType, GameType, IOrder } from "../../types/type";
import { getCartFromLS } from "../../utils/getCartFromLocalStorage";

const cartData = getCartFromLS();

const initialState: IOrder = {
   orderData: cartData ? cartData.items : [],
   orderTotalPrice: cartData ? cartData.totalPrice : 0,
   orderNameData: {userName: "", firstName: "", tel: ""},
};

const orderSlice = createSlice({
   name: "order",
   initialState,
   reducers: {
      setNewOrder: (state, action: PayloadAction<GameType>) => {
         state.orderData.push(action.payload);
      },
      setOrderTotalPrice: (state, action: PayloadAction<number>) => {  
         state.orderTotalPrice = action.payload;
      },
      setOrderData: (state, action: PayloadAction<FormInputsType>) => {
         state.orderNameData = action.payload;
      },
      deleteGameInOrder: (state, action: PayloadAction<number>) => {
         state.orderData = state.orderData.filter(
            (game) => game.id !== action.payload
         );
      },
      clearOrder: (state) => {
         state.orderData = [];
      },
   },
});

export const { setNewOrder, setOrderTotalPrice, setOrderData, deleteGameInOrder, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
