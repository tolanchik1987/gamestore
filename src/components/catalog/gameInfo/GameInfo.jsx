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
            <img src={game.image} alt="" />
            <h1>{game.title}</h1>
            <div>
               {game.genres.map((ganre, i) => (
                  <i key={i}>{ganre}</i>
               ))}
            </div>
            <div>
               <p>{game.description}</p>
            </div>
            <div className={classes.price}>
               <div>
                  <BtnPrice game={game} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default GameInfo;
