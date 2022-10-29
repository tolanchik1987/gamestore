import React, { memo } from "react";
import classes from "./ErrorMessage.module.scss";

const ErrorMessage = memo(({ error }) => {
   return (
      <div className={classes.errorMassege}>
         Ошибка получения данных: {error}
      </div>
   );
})

export default ErrorMessage;
