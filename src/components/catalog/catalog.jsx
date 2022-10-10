import React, { useState, useEffect } from "react";
import LoadingSceletonItemGame from "../SceletonItem/loadingSceletonItemGame/LoadingSceletonItemGame";
import GameItem from "./gameItem/GameItem";
import API from "../../API/API";
import classes from "./Catalog.module.scss";
import Search from "../search/Search";
import SearchCategory from "../searchCategory/SearchCategory";
import Sort from "../sort/Sort";
import ErrorMessage from "../error/ErrorMessage";

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

   const onChangeCategory = (index) => {
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
         <SearchCategory
            category={category}
            selectListItem={selectListItem}
            visibleList={visibleList}
            setVisibleList={setVisibleList}
            onChangeCategory={onChangeCategory}
         />
         <div>
            <Search search={search} setSearch={setSearch} />
         </div>
         <div
            className={classes.sortList}
            onClick={() => setSortListView(!sortListView)}
         >
            <Sort
               sortListSelect={sortListSelect}
               sortList={sortList}
               sortListView={sortListView}
               onClickSelectSortValue={onClickSelectSortValue}
            />
         </div>
         {error ? <ErrorMessage error={error} /> : ""}
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
