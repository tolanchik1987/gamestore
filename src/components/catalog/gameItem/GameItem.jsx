import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { gameChecked } from "../../store/cartReducer/cartSlice";
import BtnPrice from "../../btn_price/BtnPrice";
import classes from "./GameItem.module.scss";
import styled, { keyframes } from "styled-components";
import { zoomIn } from "react-animations";

const GameItem = ({ game }) => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const bounceAnimation = keyframes`${zoomIn}`;
   const BouncyDiv = styled.div`
      animation: 1s ${bounceAnimation};
   `;

   const handelClick = () => {
      dispatch(gameChecked(game));
      navigate("/GameInfo");
   };

   return (
      <BouncyDiv>
         <div className={classes.conteiner__game}>
            <div onClick={handelClick}>
               <div>
                  <img src={game.image} alt="" />
               </div>
               <div>
                  <h1>{game.title}</h1>
               </div>
               <div className={classes.border_genre}>
                  <p>
                     {game.genres.map((ganre, i) => (
                        <i key={i}>{ganre}</i>
                     ))}
                  </p>
               </div>
               <div>
                  <p>{game.description}</p>
               </div>
            </div>
            <div className={classes.price}>
               <div>
                  <BtnPrice game={game} />
               </div>
            </div>
         </div>
      </BouncyDiv>
   );
};

export default GameItem;
