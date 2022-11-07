import React from "react";
import loading from "../../assets/gif/loading1.gif";
import classes from "./PreLoader.module.scss"

const PreLoader: React.FC = () => {
   return (
      <div className={classes.loading}>
         <img src={loading} alt="loading"/>
      </div>
   );
};

export default PreLoader;
