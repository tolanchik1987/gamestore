import React, { useState, useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import LoadingSceletonItemGame from "../SceletonItem/loadingSceletonItemGame/LoadingSceletonItemGame";
import GameItem from "./gameItem/GameItem";
import API from "../../API/API";
import classes from "./Catalog.module.scss";
import Search from "../search/Search";

const Catalog = () => {
   const [data, setData] = useState([]);
   const [isLoadingGame, setIsLoadingGame] = useState(true);
   const [visibleList, setVisibleList] = useState(false);
   const [selectListItem, setSelectListItem] = useState(null);
   const [error, setError] = useState("");
   const [selectCategory, setSelectCategory] = useState(null);
   const [sortListView, setSortListView] = useState(false);
   const [sortListSelect, setSortListSelect] = useState(0);
   const [selectSort, setSelectSort] = useState(0);
   const [search, setSearch] = useState("");

   useEffect(() => {
      API.get(
         `${
            search
               ? `?title=${search}`
               : !selectListItem
               ? `?sortBy=${selectSort}`
               : `?search=${selectCategory}&sortBy=${selectSort}`
         }`
      )
         .then((response) => {
            setData(response.data);
            setIsLoadingGame(false);
         })
         .catch((error) => {
            setError(error.message);
         });
   }, [selectListItem, selectCategory, selectSort, search]);

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

   const sortList = [
      { name: "цена меньше", order: "price&order=asc" },
      { name: "цена больше", order: "price&order=desc" },
      { name: "по алфавиту", order: "title" },
      { name: "сначала новые", oreder: "year&order=desc" },
   ];

   const onChangeCategiry = (index) => {
      setIsLoadingGame(true);
      setSelectListItem(index);
      setSelectCategory(category[index]);
      setError("");
   };

   const onClickSelectSortValue = (index) => {
      setIsLoadingGame(true);
      setSortListSelect(index);
      setSelectSort(sortList[index].order);
      setError("");
   };

   return (
      <div className={classes.conteiner__catalog}>
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
         <div>
           <Search search={search} setSearch={setSearch}/>
         </div>
         <div
            className={classes.sortList}
            onClick={() => setSortListView(!sortListView)}
         >
            <div>
               Сортировать по: <p>{sortList[sortListSelect].name}</p>
               {sortList.map((item, index) => (
                  <div
                     onClick={() => onClickSelectSortValue(index)}
                     key={index}
                     className={
                        sortListView
                           ? classes.sortItemListOn
                           : classes.sortItemListOff
                     }
                  >
                     {item.name}
                  </div>
               ))}
            </div>
         </div>

         {error ? (
            <div className={classes.errorMassege}>
               Ошибка получения данных: {error}
            </div>
         ) : (
            ""
         )}

         <div className={classes.conteiner__catalog_game}>
            {isLoadingGame
               ? [...new Array(6)].map((_, i) => (
                    <LoadingSceletonItemGame key={i} />
                 ))
               : data.map((game) => <GameItem game={game} key={game.id} />)}
         </div>
      </div>
   );
};

export default Catalog;
