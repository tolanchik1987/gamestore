import React from "react";
import classes from "./Sort.module.scss";

const Sort = ({
   sortListSelect,
   sortList,
   sortListView,
   onClickSelectSortValue,
}) => {
   return (
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
   );
};

export default Sort;
