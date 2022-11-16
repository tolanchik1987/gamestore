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
//import { useGetItemsQuery } from "../../API/ApiSlice"              //! RTKQuery
import classes from "./Catalog.module.scss";
import { BodyClick, GameType, sortListType } from "../types/type";
import { useSelector } from "react-redux";
import {
   gameInCartSelector,
   totalPriceSelector,
} from "../store/cartReducer/cartSlice";
import PaginationPage from "./pagination/Pagination";

const category: string[] = [
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

const sortList: sortListType = [
   { name: "цена меньше", order: "price&order=asc" },
   { name: "цена больше", order: "price&order=desc" },
   { name: "по алфавиту", order: "title" },
   { name: "сначала новые", order: "year&order=desc" },
];

const Catalog: React.FC = () => {
   const [data, setData] = useState<GameType[]>([]);
   const [isLoadingGame, setIsLoadingGame] = useState<boolean>(true);
   const [visibleList, setVisibleList] = useState<boolean>(false);
   const [selectListItem, setSelectListItem] = useState<number>(0);
   const [error, setError] = useState<string>("");
   const [selectCategory, setSelectCategory] = useState<string | null>(null);
   const [sortListView, setSortListView] = useState<boolean>(false);
   const [sortListSelect, setSortListSelect] = useState<number>(0);
   const [selectSort, setSelectSort] = useState<string | number>(0);
   const [search, setSearch] = useState<string>("");
   const [value, setValue] = useState<string>("");
   const navigate = useNavigate();
   const sortRef = useRef<HTMLDivElement>(null);
   const categoryRef = useRef<HTMLDivElement>(null);
   const items: GameType[] = useSelector(gameInCartSelector);
   const totalPrice = useSelector(totalPriceSelector);
   const isMounted = React.useRef(false);
   const [currentPage, setCurrentPage] = useState<number>(1);
   const [pageSize, setPageSize] = useState<number>(3)

   React.useEffect(() => {
      if (isMounted.current) {
         const localStorageData = JSON.stringify(items);
         const localStorageTotalPrice = JSON.stringify(totalPrice);
         localStorage.setItem("cart", localStorageData);
         localStorage.setItem("cartTotalPrice", localStorageTotalPrice);
      }
      isMounted.current = true;
   }, [items, totalPrice]);

   // const {                                     //! RTKQuery
   //    data: items = [],
   //    isLoading,
   //    isFetching,
   //    isError,
   //    isSuccess,
   // } = useGetItemsQuery()

   useEffect(() => {
      const handelCklickBody = (e: MouseEvent) => {
         const _e = e as BodyClick;
         if (sortRef.current && !_e.path.includes(sortRef.current)) {
            setSortListView(false);
         }
         if (categoryRef.current && !_e.path.includes(categoryRef.current)) {
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
               ? `?page=${currentPage}&limit=${pageSize}&sortBy=${selectSort ? selectSort : `price&order=asc`}`
               : `?search=${selectCategory}&sortBy=${
                    selectSort ? selectSort : `price&order=asc`
                 }`
         }`
      )
         .then((response) => {
            setData(response.data);
            setIsLoadingGame(false);
         })
         .catch((error) => {
            setError(error.message);
         });
   }, [selectListItem, selectCategory, selectSort, search, currentPage,pageSize, navigate]);

   useEffect(() => {
      const queryString = qs.stringify({
         selectListItem,
         selectCategory,
         selectSort,
         search,
         currentPage,
      });
      navigate(`?${queryString}`);
   }, [selectListItem, selectCategory, selectSort, search, currentPage, navigate]);

   const onChangeCategory = useCallback((index: number) => {
      setIsLoadingGame(true);
      setSelectListItem(index);
      setSelectCategory(category[index]);
      setError("");
   }, []);

   const onClickSelectSortValue = useCallback((index: number) => {
      setIsLoadingGame(true);
      setSortListSelect(index);
      setSelectSort(sortList[index].order);
      setError("");
   }, []);

   const onChangeSerachInput = useCallback(
      debounce((value: string) => {
         setValue(value);
         setSearch(value);
      }, 250),
      []
   );

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
               : data &&
                 data.map((game) => <GameItem game={game} key={game.id} />)}
         </div>
         <PaginationPage currentPage={currentPage} setCurrentPage={setCurrentPage} pageSize={pageSize} setPageSize={setPageSize}/>
      </div>
   );
};

export default Catalog;
