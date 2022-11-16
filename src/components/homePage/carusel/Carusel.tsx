import { Carousel } from "antd";
import React from "react";
import "antd/es/carousel/style/index.css";
import { GameType } from "../../types/type";

const contentStyle: React.CSSProperties = {
   height: "360px",
   margin: " 0 auto",
   marginBottom: "30px",
};

type PropsType = {
   data: GameType[] | undefined;
};

const Carusel: React.FC<PropsType> = ({ data }) => (
   <Carousel autoplay>
      {data &&
         data.map((game) => (
            <div>
               <img
                  style={contentStyle}
                  key={game.id}
                  src={game.image}
                  alt=""
               />
            </div>
         ))}
   </Carousel>
);

export default Carusel;
