import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
   addToCart,
   deleteGameInCart,
   gameInCartSelector,
} from "../store/cartReducer/cartSlice";
import { BtnPropsType, GameType } from "../types/type";
import classes from "./BtnPrice.module.scss";

const BtnPrice: React.FC<BtnPropsType> = React.memo(({ game }) => {
   const dispatch = useDispatch();
   const items: GameType[] = useSelector(gameInCartSelector);
   const itemsInCart = items.some((i) => i.id === game.id);

   const addGameToCart = () => {
      if (!itemsInCart) {
         dispatch(addToCart(game));
      } else {
         dispatch(deleteGameInCart(game.id));
      }
   };

   return (
      <div className={classes.price}>
         {!itemsInCart ? (
            <button className={classes.secondaryMy} onClick={addGameToCart}>
               {!itemsInCart
                  ? <i>В корзину {game.price} руб.</i>
                  : <i>Удалить из корзины</i>}
            </button>
         ) : (
            <button className={classes.primaryMy} onClick={addGameToCart}>
               {!itemsInCart
                  ? <i>В корзину {game.price} руб.</i>
                  : <i>Удалить из корзины</i>}
            </button>
         )}
      </div>
   );
});

export default BtnPrice;
