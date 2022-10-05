import React, { useEffect, useState } from "react";
import axios from "axios";
import GameItem from "../catalog/gameItem/GameItem";
import PictureGameOnHomePage from "../SceletonItem/LoadingSceletonPictureGameOnHomePage/PictureGameOnHomePage";
import LoadingSceletonItemGame from "../SceletonItem/loadingSceletonItemGame/LoadingSceletonItemGame";
import classes from "./HomePage.module.scss";
import JenersItem from "./jenersItem/JenersItem";

const HomePage = () => {
   // const instance = axios.create({
   //    baseURL: 'https://633ae7ca471b8c395577f828.mockapi.io/items',
   //  });

   const [visiblePopular, setVisiblePopular] = useState(false);
   const [visibleNewGame, setVisibleNewGame] = useState(false);
   const [visibleSaleGame, setVisibleSaleGame] = useState(false);
   const [visibleCategory, setVisibleCategory] = useState(false);
   const [visiblePictureGame, setVisiblePictureGame] = useState(true);
   const [activeCategory, setActiveCategory] = useState(null);
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState("");

   useEffect(() => {
      axios
         .get("https://633ae7ca471b8c395577f828.mockapi.io/items")
         .then((response) => {
            setData(response.data);
            setIsLoading(false);
         })
         .catch((error) => {
            setError(error.message);
         })
         .finally(() => {});
   }, []);

   const handleClick = (index) => {
      if (index === 0) {
         setIsLoading(true);
         axios
         .get("https://633ae7ca471b8c395577f828.mockapi.io/items?search=2022")
         .then((response) => {
            setData(response.data);
            setIsLoading(false);
         })
         .catch((error) => {
            setError(error.message);
         })
         .finally(() => {});
         setVisiblePopular(false);
         setVisibleNewGame(true);
         setVisibleSaleGame(false);
         setVisibleCategory(false);
         setVisiblePictureGame(false);
         setActiveCategory(index);
      } else if (index === 1) {
         setIsLoading(true);
         axios
         .get("https://633ae7ca471b8c395577f828.mockapi.io/items?popular=true")
         .then((response) => {
            setData(response.data);
            setIsLoading(false);
         })
         .catch((error) => {
            setError(error.message);
         })
         .finally(() => {});
         setVisiblePopular(true);
         setVisibleNewGame(false);
         setVisibleSaleGame(false);
         setVisibleCategory(false);
         setVisiblePictureGame(false);
         setActiveCategory(index);
      } else if (index === 2) {
         setIsLoading(true);
         axios
         .get("https://633ae7ca471b8c395577f828.mockapi.io/items?sale=true")
         .then((response) => {
            setData(response.data);
            setIsLoading(false);
         })
         .catch((error) => {
            setError(error.message);
         })
         .finally(() => {});
         setVisiblePopular(false);
         setVisibleNewGame(false);
         setVisibleSaleGame(true);
         setVisibleCategory(false);
         setVisiblePictureGame(false);
         setActiveCategory(index);
      } else if (index === 3) {
         setIsLoading(true);
         axios
         .get("https://633ae7ca471b8c395577f828.mockapi.io/items")
         .then((response) => {
            setData(response.data);
            setIsLoading(false);
         })
         .catch((error) => {
            setError(error.message);
         })
         .finally(() => {});
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
         {!error ? (
            <div>
               {visiblePictureGame && (
                  <div className={classes.contentHomePage}>
                     {isLoading
                        ? [...new Array(6)].map((_, i) => (
                             <PictureGameOnHomePage key={i} />
                          ))
                        : data.map((game) => (
                             <img key={game.id} src={game.image} alt="" />
                          ))}
                  </div>
               )}
               {visiblePopular && (
                  <div className={classes.contentGame}>
                     {isLoading
                        ? [...new Array(3)].map((_, i) => (
                             <LoadingSceletonItemGame key={i} />
                          ))
                        : data.map((game) => (
                             <GameItem game={game} key={game.id} />
                          ))}
                  </div>
               )}
               {visibleNewGame && (
                  <div className={classes.contentGame}>
                     {isLoading
                        ? [...new Array(3)].map((_, i) => (
                             <LoadingSceletonItemGame key={i} />
                          ))
                        : data.map((game) => (
                             <GameItem game={game} key={game.id} />
                          ))}
                  </div>
               )}
               {visibleSaleGame && (
                  <div className={classes.contentGame}>
                     {isLoading
                        ? [...new Array(3)].map((_, i) => (
                             <LoadingSceletonItemGame key={i} />
                          ))
                        : data.map((game) => (
                             <GameItem game={game} key={game.id} />
                          ))}
                  </div>
               )}
               {visibleCategory && (
                  <div className={classes.contentGame}>{<JenersItem />}</div>
               )}
            </div>
         ) : (
           <div className={classes.errorMessage}>Ошибка получения данных с сервера: { error }</div> 
         )}
      </div>
   );
};

export default HomePage;
