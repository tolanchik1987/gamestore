import React from "react";
import searchImage from "../../assets/img/search.png";
import classes from "./Search.module.scss"

const Search = ({ value, onChangeSerachInput }) => {

   return (
      <div className={classes.wrapper__search}>
         <img className={classes.search_image} src={searchImage} alt="search" />
         <input
            className={classes.input_search}
            type="search"
            placeholder="Введите название игры"
            value={value}
            onChange={(e) => onChangeSerachInput(e.target.value)}
         />
      </div>
   );
};

export default Search;
