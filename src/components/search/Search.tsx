import React, { memo } from "react";
import searchImage from "../../assets/img/search.png";
import classes from "./Search.module.scss"

type propsType = {
   value: string,
   onChangeSerachInput: (e:string) => void
   setValue: (e:string) => void
}

const Search: React.FC<propsType> = memo(({ value, onChangeSerachInput, setValue }) => {

   const onChange = (val:string) => {
      onChangeSerachInput(val)
      setValue(val)
   }

   return (
      <div className={classes.wrapper__search}>
         <img className={classes.search_image} src={searchImage} alt="search" />
         <input
            className={classes.input_search}
            type="search"
            placeholder="Введите название игры"
            value={value}
            onChange={(e) => onChange(e.target.value)}
         />
      </div>
   );
})

export default Search;
