import React, { memo } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import classes from "./SearchCategory.module.scss";

type SearchCategoryPropsType = {
   category: string[],
   selectListItem: number,
   visibleList: boolean,
   setVisibleList: (visibleList:boolean) => void,
   onChangeCategory: (index: number) => void,
}

const SearchCategory: React.FC<SearchCategoryPropsType> = memo(({
   category,
   selectListItem,
   visibleList,
   setVisibleList,
   onChangeCategory,
}) => {
   return (
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
                  onClick={() => onChangeCategory(index)}
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
   );
})

export default SearchCategory;
