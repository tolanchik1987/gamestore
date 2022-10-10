import React from "react";
import classes from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteGameInCart } from "../store/cartReducer/cartSlice";
import cartImage from "../../assets/img/cart.png"

const Cart = () => {
   const dispatch = useDispatch();

   const items = useSelector((state) => state.cart.gameInCart);
   const totalPrice = items.reduce((acc, game) => acc + game.price, 0);

   return (
      <div>
         {items.length > 0 ? (
            <div className={classes.conteiner__gameInCart}>
               <div className={classes.gameTitle}>
                  {items.map((i) =>
                     i !== items ? (
                        <div key={i.id}>
                           <img src={i.image} alt="" />
                           <span>
                              {i.title} - {i.price} руб.
                           </span>
                           <div
                              className={classes.btnItem}
                              onClick={() => {
                                 dispatch(deleteGameInCart(i.id));
                              }}
                           >
                              Удалить из корзины
                           </div>
                        </div>
                     ) : null
                  )}
               </div>
               <div className={classes.priceAllGame}>
                  <b>Всего к оплате: {totalPrice} руб.</b>
                  <button>Оформить заказ</button>
               </div>
            </div>
         ) : (
            <div className={classes.cartImage}>
               <i>"Корзина пуста"</i>
               <div>
                  <img src={cartImage} alt="" />
               </div>
            </div>
         )}
      </div>
   );
};

export default Cart;
