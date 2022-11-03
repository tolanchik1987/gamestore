import React from "react";
import classes from "./Sort.module.scss";

type propsType = {
   sortListSelect: number,
   sortList: {name: string, order: string}[],
   sortListView: boolean,
   onClickSelectSortValue: (index:number) => void,
}

const Sort: React.FC<propsType> = React.memo(({
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
})

export default Sort;
