import React, { useState, useEffect } from "react";
import classes from "./Catalog.module.scss";
import GameItem from "./gameItem/GameItem";
import { useDispatch } from "react-redux";
import { getViewCatalog } from "../store/catalogReducer/catalogSlice";
import LoadingSceletonItemGame from "../SceletonItem/loadingSceletonItemGame/LoadingSceletonItemGame";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import axios from "axios";

const Catalog = () => {
   const dispatch = useDispatch();
   const [viewCatalog, setViewCatalog] = useState(true);
   const [data, setData] = useState([]);
   const [isLoadingGame, setIsLoadingGame] = useState(true);
   const [visibleList, setVisibleList] = useState(false);
   const [selectListItem, setSelectListItem] = useState(null);
   const [error, setError] = useState("");

   useEffect(() => {
      fetch("https://633ae7ca471b8c395577f828.mockapi.io/items")
         .then((response) => response.json())
         .then((json) => {
            setData(json);
            setIsLoadingGame(false);
         });
   }, []);

   const handlerClickViewCatalog = () => {
      setViewCatalog(!viewCatalog);
      dispatch(getViewCatalog(viewCatalog));
   };

   const category = [
      "Все",
      "Экшен",
      "Приключения",
      "Стратегии",
      "РПГ",
      "Гонки",
      "Симулятор",
      "Открытый мир",
      "Шутер",
      "Война",
      "Глубокий сюжет",
      "Протагонистка",
   ];

   const onChangeCategiry = (index) => {
      setIsLoadingGame(true);
      setSelectListItem(index);
      setError("");
      index === 0
         ? axios
              .get("https://633ae7ca471b8c395577f828.mockapi.io/items")
              .then((response) => {
                 setData(response.data);
                 setIsLoadingGame(false);
              })
              .catch((error) => {
                 setError(error.message);
              })
              .finally(() => {})
         : axios
              .get(
                 "https://633ae7ca471b8c395577f828.mockapi.io/items?search=" +
                    `${category[index]}`
              )
              .then((response) => {
                 setData(response.data);
                 setIsLoadingGame(false);
              })
              .catch((error) => {
                 setError(error.message);
              })
              .finally(() => {});
   };

   return (
      <div className={classes.conteiner__catalog}>
         <b>Каталог игр:</b>
         <button onClick={handlerClickViewCatalog}>
            {!viewCatalog ? "Показать игры" : "Скрыть игры"}
         </button>
         {error ? (
            <div className={classes.errorMassege}>
               Ошибка получения данных: {error}
            </div>
         ) : (
            ""
         )}
         <div>
            <ul
               onClick={() => setVisibleList(!visibleList)}
               className={classes.janres}
            >
               {!visibleList ? (
                  <div className={classes.icon}>
                     <FiChevronDown size={20} />
                  </div>
               ) : (
                  <div className={classes.icon}>
                     <FiChevronUp size={20} />
                  </div>
               )}
               {selectListItem !== 0 && !selectListItem && (
                  <div className={classes.visibleChengeCategory}>
                     выберите категорию
                  </div>
               )}
               {category[selectListItem]}
               {category.map((item, index) => (
                  <li
                     onClick={() => onChangeCategiry(index)}
                     className={
                        visibleList
                           ? classes.displayListOn
                           : classes.displayListOff
                     }
                     key={item}
                     value={index}
                  >
                     {item}
                  </li>
               ))}
            </ul>
         </div>

         {viewCatalog && (
            <div className={classes.conteiner__catalog_game}>
               {isLoadingGame
                  ? [...new Array(6)].map((_, i) => (
                       <LoadingSceletonItemGame key={i} />
                    ))
                  : data.map((game) => <GameItem game={game} key={game.id} />)}
            </div>
         )}
      </div>
   );
};

export default Catalog;
