import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import classes from "./PageNotFound.module.scss";

const PageNotFound: React.FC = () => {
   return (
      <div className={classes.wrapper}>
         <h1>CТРАНИЦА НЕ НАЙДЕНА!</h1>
         <Link to="/"><button className={classes.btnBack}><FiArrowLeft size={20}/> На главную</button></Link>
      </div>
   );
};

export default PageNotFound;
