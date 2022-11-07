import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
   addToCart,
   deleteGameInCart,
   gameInCartSelector,
} from "../store/cartReducer/cartSlice";
import { GameType } from "../types/type";
import classes from "./BtnPrice.module.scss";

type BtnPropsType = {
   game: GameType;
};

const BtnPrice: React.FC<BtnPropsType> = React.memo(({ game }) => {
   const dispatch = useDispatch();
   const items: GameType[] = useSelector(gameInCartSelector);
   const itemsInCart = items.some((i) => i.id === game.id);
  
   // const isMounted = React.useRef(false);

   // React.useEffect(()=> {
   //    if (isMounted.current) {
   //       const localStorageData = JSON.stringify(items);
   //       localStorage.setItem('cart', JSON.stringify(localStorageData));
   //    }
   //    isMounted.current = true;
   // }, [items])

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
});

export default BtnPrice;
