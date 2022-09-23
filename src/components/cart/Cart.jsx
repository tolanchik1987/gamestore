import React from "react";
import classes from "./Cart.module.scss";
import { useSelector } from "react-redux";


const Cart = () => {
   const items = useSelector((state) => state.cart.gameInCart);
   const totalPrice = items.reduce((acc, game) => acc + game.price, 0);
   return (
      <div>
         {items && (
			<div className={classes.conteiner__gameInCart}>
				<div className={classes.gameTitle}>
					{items.map(i=><div><img src={i.image} alt="" /><span key={i.id}>{i.title} - {i.price} руб.</span></div>)}
					<br/>
				</div>
            	<div className={classes.priceAllGame}>
               		<b>Всего к оплате: {totalPrice} руб.</b>
					<button>Оплатить</button>
            	</div>
			</div> 
         )}
      </div>
   );
};

export default Cart;
