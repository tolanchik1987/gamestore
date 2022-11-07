import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
   clearCart,
   deleteGameInCart,
   gameInCartSelector,
   setTotalPrice,
   totalPriceSelector,
} from "../store/cartReducer/cartSlice";
import cartImage from "../../assets/img/cart.png";
import classes from "./Cart.module.scss";
import { GameType } from "../types/type";

const Cart: React.FC = () => {
   const dispatch = useDispatch();
   const items: GameType[] = useSelector(gameInCartSelector);
   const totalPrice = useSelector(totalPriceSelector);
   
   React.useEffect(()=>{
      dispatch(setTotalPrice(items.reduce((acc, game) => acc + game.price, 0)));
   }, [items])

   const onClickOrder = () => {
      dispatch(clearCart())
      alert('Спасибо! Ваш заказ принят!')
   }

   return (
      <div>
         {items.length > 0 ? (
            <div className={classes.conteiner__gameInCart}>
               <div className={classes.gameTitle}>
                  {items?.map(
                     (i) => (
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
                     )
                  )}
               </div>
               <div className={classes.priceAllGame}>
                  <b>Всего к оплате: {totalPrice} руб.</b>
                  <button onClick={onClickOrder}>Оформить заказ</button>
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
