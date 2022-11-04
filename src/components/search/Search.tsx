import React, { memo } from "react";
import searchImage from "../../assets/img/search.png";
import classes from "./Search.module.scss"

type SearchPropsType = {
   value: string,
   onChangeSerachInput: (e:string) => void
   setValue: (e:string) => void
}

const Search: React.FC<SearchPropsType> = memo(({ value, onChangeSerachInput, setValue }) => {

   const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      onChangeSerachInput(e.target.value)
      setValue(e.target.value)
   }

   return (
      <div className={classes.wrapper__search}>
         <img className={classes.search_image} src={searchImage} alt="search" />
         <input
            className={classes.input_search}
            type="search"
            placeholder="Введите название игры"
            value={value}
            onChange={onChange}
         />
      </div>
   );
})

export default Search;
