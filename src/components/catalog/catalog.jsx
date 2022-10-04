import React, { useState, useEffect } from "react";
import classes from "./Catalog.module.scss";
import GameItem from "./gameItem/GameItem";
import { useDispatch } from "react-redux";
import { getViewCatalog } from "../store/catalogReducer/catalogSlice";
import LoadingSceletonItemGame from "../loadingSceletonItemGame/LoadingSceletonItemGame";

const Catalog = () => {
   const dispatch = useDispatch();
   const [viewCatalog, setViewCatalog] = useState(true);
   const [data, setData] = useState([]);
   const [isLoadingGame, setIsLoadingGame] = useState(true);

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
      "Выберите категорию",
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

   return (
      <div className={classes.conteiner__catalog}>
         <b>Каталог игр:</b>
         <button onClick={handlerClickViewCatalog}>
            {!viewCatalog ? "Показать игры" : "Скрыть игры"}
         </button>
         <div>
            <select name="janres">
               {category.map((item, index) => (
                  <option key={item} value={index}>
                     {item}
                  </option>
               ))}
            </select>
         </div>
         {viewCatalog &&<div className={classes.conteiner__catalog_game}>
            { isLoadingGame
               ? [...new Array(6)].map((_, i) => (
                    <LoadingSceletonItemGame key={i} />
                 ))
               : data.map((game) => <GameItem game={game} key={game.id} />)}
         </div>}
      </div>
   );
};

export default Catalog;
