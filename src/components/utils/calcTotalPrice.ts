import { useDispatch } from "react-redux";
import { setTotalPrice } from "../store/cartReducer/cartSlice";
import { GameType } from "../types/type";

//const dispatch = useDispatch()
export const calcTotalPrice = (items: GameType[]) => {
  // return  dispatch(setTotalPrice(items.reduce((acc, game) => acc + game.price, 0)));
}