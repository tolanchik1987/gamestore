import React from "react";
import { useSelector } from "react-redux";
import BtnPrice from "../../btn_price/BtnPrice";
import classes from "./GameInfo.module.scss";

const GameInfo = () => {
   const game = useSelector((state) => state.cart.gameSelected);
   
   return (
      <div className={classes.conteiner__game_info}>
         <div className={classes.conteiner__video}>
            <iframe
               src={game.video}
               width="650"
               height="450"
               frameborder="0"
               title="VIDEO"
            ></iframe>
         </div>
         <div className={classes.conteiner__info}>
            <div>
               <img src={game.image} alt="" />
            </div>
            <div>
               <h1>{game.title}</h1>
            </div>
            <div>
               <p>
                  {game.genres.map((ganre, i) => (
                     <i key={i}>{ganre}</i>
                  ))}
               </p>
            </div>
            <div>
               <p>{game.description}</p>
            </div>
            <div className={classes.price}>
            <div><BtnPrice game={game} /></div>
         </div>
         </div>
      </div>
   );
};

export default GameInfo;
