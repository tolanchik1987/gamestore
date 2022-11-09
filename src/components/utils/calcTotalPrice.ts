//import { useDispatch } from "react-redux";
import { setTotalPrice } from "../store/cartReducer/cartSlice";
import { GameType } from "../types/type";

//const dispatch = useDispatch()
const calcTotalPrice = (items: GameType[]) => {
 // return  dispatch(setTotalPrice(items.reduce((acc, game) => acc + game.price, 0)));
}
export default calcTotalPrice;