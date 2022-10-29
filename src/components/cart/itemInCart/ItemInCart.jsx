import React, { memo } from "react";
import { useSelector } from "react-redux";
import classes from "./ItemInCart.module.scss";

const ItemInCart = memo(() => {
   const items = useSelector((state) => state.cart.gameInCart);
   const increment = items.length;

   return (
      <div className={classes.conteiner__increment}>
         <div className={classes.increment}>{increment}</div>
      </div>
   );
})

export default ItemInCart;
