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
					{items.map(i=><div><span key={i.id}>{i.title}</span></div>)}
					<br/>
				</div>
            	<div>
               		<span>Всего к оплате: {totalPrice}руб.</span>
					<button>Оплатить</button>
            	</div>
			</div>
         )}
      </div>
   );
};

export default Cart;
