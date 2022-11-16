import { RootState } from './../store';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameType, ICartSlice } from "../../types/type";
import { getCartFromLS } from '../../utils/getCartFromLocalStorage';

const cartData = getCartFromLS();

const initialState: ICartSlice = {
   gameInCart: cartData ? cartData.items : [],
   totalPrice: cartData ? cartData.totalPrice : 0,
   gameSelected: {
      description: "",
      genres: [],
      id: 0,
      image: "",
      popular: false,
      price: 0,
      sale: false,
      title: "",
      video: "",
      year: 0,
   },
};

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addToCart: (state, action: PayloadAction<GameType>) => {
         state.gameInCart.push(action.payload);
      },
      deleteGameInCart: (state, action: PayloadAction<number>) => {
         state.gameInCart = state.gameInCart.filter(
            (game) => game.id !== action.payload
         );
      },
      clearCart: (state) => {
         state.gameInCart = [];
      },
      gameChecked: (state, action: PayloadAction<GameType>) => {
         state.gameSelected = action.payload;
      },
      setTotalPrice: (state, action: PayloadAction<number>) => {
         state.totalPrice = action.payload;
      }
   },
});

export const gameInCartSelector = (state: RootState) => state.cart.gameInCart;
export const gameSelectSelector = (state: RootState) => state.cart.gameSelected;
export const totalPriceSelector = (state: RootState) => state.cart.totalPrice;

export const { addToCart, deleteGameInCart, gameChecked, setTotalPrice, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
