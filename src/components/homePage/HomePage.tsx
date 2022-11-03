import React, { useEffect, useState } from "react";
import GameItem from "../catalog/gameItem/GameItem";
import PictureGameOnHomePage from "../SceletonItem/LoadingSceletonPictureGameOnHomePage/PictureGameOnHomePage";
import LoadingSceletonItemGame from "../SceletonItem/loadingSceletonItemGame/LoadingSceletonItemGame";
import JenersItem from "./jenersItem/JenersItem";
import API from "../../API/API";
import classes from "./HomePage.module.scss";
import { GameType } from "../type/type";

const HomePage: React.FC = () => {
   const [visiblePopular, setVisiblePopular] = useState<boolean>(false);
   const [visibleNewGame, setVisibleNewGame] = useState<boolean>(false);
   const [visibleSaleGame, setVisibleSaleGame] = useState<boolean>(false);
   const [visibleCategory, setVisibleCategory] = useState<boolean>(false);
   const [visiblePictureGame, setVisiblePictureGame] = useState<boolean>(true);
   const [activeCategory, setActiveCategory] = useState<number | null>(null);
   const [data, setData] = useState<GameType[]>();
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [error, setError] = useState<string>("");
   const [searchValue, setSearchValue] = useState<string>("");

   useEffect(() => {
      API.get(searchValue)
         .then((response) => {
            setData(response.data);
            setIsLoading(false);
         })
         .catch((error) => {
            setError(error.message);
         });
   }, [searchValue]);

   const handleClickCategory = (index:number) => {
      if (index === 0) {
         setIsLoading(true);
         setSearchValue("?search=2022");
         setVisiblePopular(false);
         setVisibleNewGame(true);
         setVisibleSaleGame(false);
         setVisibleCategory(false);
         setVisiblePictureGame(false);
         setActiveCategory(index);
      } else if (index === 1) {
         setIsLoading(true);
         setSearchValue("?popular=true");
         setVisiblePopular(true);
         setVisibleNewGame(false);
         setVisibleSaleGame(false);
         setVisibleCategory(false);
         setVisiblePictureGame(false);
         setActiveCategory(index);
      } else if (index === 2) {
         setIsLoading(true);
         setSearchValue("?sale=true");
         setVisiblePopular(false);
         setVisibleNewGame(false);
         setVisibleSaleGame(true);
         setVisibleCategory(false);
         setVisiblePictureGame(false);
         setActiveCategory(index);
      } else if (index === 3) {
         setIsLoading(true);
         setSearchValue(" ");
         setVisiblePopular(false);
         setVisibleNewGame(false);
         setVisibleSaleGame(false);
         setVisibleCategory(true);
         setVisiblePictureGame(true);
         setActiveCategory(index);
      }
   };

   const category: string[] = ["Новинки", "Популярные", "Скидки", "Жанры"];

   return (
      <div className={classes.conteiner__homePage}>
         <h2>Wellcom game store!</h2>
         <div className={classes.listItem}>
            <ul>
               {category.map((item, index) => (
                  <li
                     key={item}
                     onClick={() => handleClickCategory(index)}
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
                        : data && data.map((game) => (
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
                        : data && data.map((game) => (
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
                        : data && data.map((game) => (
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
                        : data && data.map((game) => (
                             <GameItem game={game} key={game.id} />
                          ))}
                  </div>
               )}
               {visibleCategory && (
                  <div className={classes.contentGame}>{<JenersItem />}</div>
               )}
            </div>
         ) : (
            <div className={classes.errorMessage}>
               Ошибка получения данных с сервера: {error}
            </div>
         )}
      </div>
   );
};

export default HomePage;
