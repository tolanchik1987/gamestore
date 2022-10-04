import React, { useEffect, useState } from "react";
import GameItem from "../catalog/gameItem/GameItem";
import PictureGameOnHomePage from "../SceletonItem/LoadingSceletonPictureGameOnHomePage/PictureGameOnHomePage";
import classes from "./HomePage.module.scss";
import JenersItem from "./jenersItem/JenersItem";

const HomePage = () => {
   const [visiblePopular, setVisiblePopular] = useState(false);
   const [visibleNewGame, setVisibleNewGame] = useState(false);
   const [visibleSaleGame, setVisibleSaleGame] = useState(false);
   const [visibleCategory, setVisibleCategory] = useState(false);
   const [visiblePictureGame, setVisiblePictureGame] = useState(true);
   const [activeCategory, setActiveCategory] = useState(null);
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
      fetch("https://633ae7ca471b8c395577f828.mockapi.io/items")
         .then((response) => response.json())
         .then((json) => {
            setData(json);
            setIsLoading(false)
         });
   }, []);

   const handleClick = (index) => {
      if (index === 0) {
         setVisiblePopular(false);
         setVisibleNewGame(true);
         setVisibleSaleGame(false);
         setVisibleCategory(false);
         setVisiblePictureGame(false);
         setActiveCategory(index);
      } else if (index === 1) {
         setVisiblePopular(true);
         setVisibleNewGame(false);
         setVisibleSaleGame(false);
         setVisibleCategory(false);
         setVisiblePictureGame(false);
         setActiveCategory(index);
      } else if (index === 2) {
         setVisiblePopular(false);
         setVisibleNewGame(false);
         setVisibleSaleGame(true);
         setVisibleCategory(false);
         setVisiblePictureGame(false);
         setActiveCategory(index);
      } else if (index === 3) {
         setVisiblePopular(false);
         setVisibleNewGame(false);
         setVisibleSaleGame(false);
         setVisibleCategory(true);
         setVisiblePictureGame(true);
         setActiveCategory(index);
      }
   };

   const category = ["Новинки", "Популярные", "Скидки", "Жанры"];

   return (
      <div className={classes.conteiner__homePage}>
         <h2>Wellcom game store!</h2>
         <div className={classes.listItem}>
            <ul>
               {category.map((item, index) => (
                  <li
                     key={item}
                     onClick={() => handleClick(index)}
                     className={activeCategory === index ? classes.active : ""}
                  >
                     {item}
                  </li>
               ))}
            </ul>
         </div>
         {visiblePictureGame && <div className={classes.contentHomePage}>
            {isLoading ? [...new Array(6)].map((_,i) => <PictureGameOnHomePage key={i} />) :
               data.map((game) => (
                  <img key={game.id} src={game.image} alt="" />
               ))}
         </div>}
         {visiblePopular && (
            <div className={classes.contentGame}>
               {data.map(
                  (game) =>
                     game.popular && <GameItem game={game} key={game.id} />
               )}
            </div>
         )}
         {visibleNewGame && (
            <div className={classes.contentGame}>
               {data.map(
                  (game) =>
                     game.year > 2020 && <GameItem game={game} key={game.id} />
               )}
            </div>
         )}
         {visibleSaleGame && (
            <div className={classes.contentGame}>
               {data.map(
                  (game) => game.sale && <GameItem game={game} key={game.id} />
               )}
            </div>
         )}
         {visibleCategory && (
            <div className={classes.contentGame}>{<JenersItem />}</div>
         )}
      </div>
   );
};

export default HomePage;
