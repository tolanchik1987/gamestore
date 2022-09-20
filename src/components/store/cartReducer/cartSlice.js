import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gameInCart: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state,action) => {
            state.gameInCart.push(action.payload)
        },
    }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer