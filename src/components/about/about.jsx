import React from "react";
import styled, { keyframes } from "styled-components";
import { zoomIn } from "react-animations";
import classes from "./About.module.scss";

const About = () => {
   const startAnimation = keyframes`${zoomIn}`;
   const StartDiv = styled.div`
      animation: 1s ${startAnimation};
   `;
   return (
      <StartDiv>
         <div className={classes.conteiner_about}>
            <article>
               Этот магазин игр разработан на React. Он появился из-за огромной
               любви автора к своему делу! ))) Мой профиль на GitHub:{" "}
               <a href="https://github.com/tolanchik1987" alt="">
                  https://github.com/tolanchik1987
               </a>
            </article>
         </div>
      </StartDiv>
   );
};

export default About;
