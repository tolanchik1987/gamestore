import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   gameInCart: [],
   gameSelected: [],
};

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addToCart: (state, action) => {
         state.gameInCart.push(action.payload);
      },
      deleteGameInCart: (state, action) => {
         state.gameInCart = state.gameInCart.filter(
            (game) => game.id !== action.payload
         );
      },
      gameChecked: (state, action) => {
         state.gameSelected = action.payload;
      },
   },
});

export const { addToCart, deleteGameInCart, gameChecked } = cartSlice.actions;
export default cartSlice.reducer;
