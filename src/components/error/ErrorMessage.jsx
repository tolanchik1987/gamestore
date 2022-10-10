import React from "react";
import classes from "./ErrorMessage.module.scss"

const ErrorMessage = ({ error }) => {
   return (
      <div className={classes.errorMassege}>
         Ошибка получения данных: {error}
      </div>
   );
};

export default ErrorMessage;
