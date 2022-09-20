import React from "react";
import classes from "./GameItem.module.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartReducer/cartSlice";

const GameItem = ({ game }) => {
   const dispatch = useDispatch();

   const addGameToCart = () => {
      dispatch(addToCart(game))
   }
   return ( 
      <div className={classes.conteiner__game}>
         <div><img src={game.image} alt="" /></div>
         <div>
            <h1>{game.title}</h1>
         </div>
         <div className={classes.border_genre}>
            <p>{game.genres.map((ganre,i)=><i key={i}>{ganre}</i>)}</p>
         </div>
         <div>
            <p>{game.description}</p> 
         </div>
         <div className={classes.price}>
            <button onClick={addGameToCart}>Купить {game.price}руб.</button>
         </div>
      </div>
   );
};

export default GameItem;
