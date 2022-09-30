import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteGameInCart } from "../store/cartReducer/cartSlice";
import classes from "./BtnPrice.module.scss";

const BtnPrice = ({ game }) => {
   const dispatch = useDispatch();
   const items = useSelector((state) => state.cart.gameInCart);
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
            <button className={classes.secondary} onClick={addGameToCart}>
               {!itemsInCart
                  ? `В корзину ${game.price}руб.`
                  : "Удалить из корзины"}{" "}
            </button>
         ) : (
            <button className={classes.primary} onClick={addGameToCart}>
               {!itemsInCart
                  ? `В корзину ${game.price}руб.`
                  : "Удалить из корзины"}{" "}
            </button>
         )}
      </div>
   );
};

export default BtnPrice;
