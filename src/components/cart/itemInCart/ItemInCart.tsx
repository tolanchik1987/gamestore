import React, { memo } from "react";
import { useSelector } from "react-redux";
import { gameInCartSelector } from "../../store/cartReducer/cartSlice";
import classes from "./ItemInCart.module.scss";

const ItemInCart: React.FC = memo(() => {
   const items = useSelector(gameInCartSelector);
   const increment = items.length;

   return (
      <div className={classes.conteiner__increment}>
         <div className={classes.increment}>{increment}</div>
      </div>
   );
})

export default ItemInCart;
