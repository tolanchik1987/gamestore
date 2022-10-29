import React, { useState, useEffect, useRef, useCallback } from "react";
import debounce from "lodash.debounce";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import LoadingSceletonItemGame from "../SceletonItem/loadingSceletonItemGame/LoadingSceletonItemGame";
import ErrorMessage from "../error/ErrorMessage";
import GameItem from "./gameItem/GameItem";
import Search from "../search/Search";
import SearchCategory from "../searchCategory/SearchCategory";
import Sort from "../sort/Sort";
import API from "../../API/API";
import classes from "./Catalog.module.scss";

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
   const [value, setValue] = useState();
   const navigate = useNavigate();
   const sortRef = useRef();
   const categoryRef = useRef();

   useEffect(() => {
      const handelCklickBody = (e) => {
         if (!e.path.includes(sortRef.current)) {
            setSortListView(false);
         }
         if (!e.path.includes(categoryRef.current)) {
            setVisibleList(false);
         }
      };
      document.body.addEventListener("click", handelCklickBody);
      return () => {
         document.body.removeEventListener("click", handelCklickBody);
      };
   }, []);

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
   }, [selectListItem, selectCategory, selectSort, search, navigate]);

   useEffect(() => {
      const queryString = qs.stringify({
         selectListItem,
         selectCategory,
         selectSort,
         search,
      });
      navigate(`?${queryString}`);
   }, [selectListItem, selectCategory, selectSort, search, navigate]);

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

   const onChangeCategory = useCallback((index) => {
      setIsLoadingGame(true);
      setSelectListItem(index);
      setSelectCategory(category[index]);
      setError("");
   },[])

   const onClickSelectSortValue = useCallback((index) => {
      setIsLoadingGame(true);
      setSortListSelect(index);
      setSelectSort(sortList[index].order);
      setError("");
   },[])

   const onChangeSerachInput = useCallback(debounce((value) => {
      setSearch(value);
   }, 250),[])

   return (
      <div className={classes.conteiner__catalog}>
         <div ref={categoryRef}>
            <SearchCategory
               category={category}
               selectListItem={selectListItem}
               visibleList={visibleList}
               setVisibleList={setVisibleList}
               onChangeCategory={onChangeCategory}
            />
         </div>
         <div>
            <Search
               value={value}
               setValue={setValue}
               onChangeSerachInput={onChangeSerachInput}
            />
         </div>
         <div
            ref={sortRef}
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
