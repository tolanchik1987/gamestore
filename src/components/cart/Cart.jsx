import React from "react";
import classes from "./Cart.module.scss";
import { useSelector } from "react-redux";

const Cart = () => {
   const items = useSelector((state) => state.cart.gameInCart);
   const totalPrice = items.reduce((acc, game) => acc + game.price, 0);
   
   return (
      <div>
		{items.length > 0 ? (
            <div className={classes.conteiner__gameInCart}>
               <div className={classes.gameTitle}>
                  {items.map((i) => (
                     i !== items ?
					 (<div key={i.id}>
                        <img src={i.image} alt="" />
                        <span>
                           {i.title} - {i.price} руб.
                        </span>
                     </div>) : null
                  ))}
               </div>
               <div className={classes.priceAllGame}>
                  <b>Всего к оплате: {totalPrice} руб.</b>
                  <button>Оформить</button>
               </div>
            </div>
         ) : "Корзина пуста"}
      </div>
   );
};

export default Cart;
