import React, { memo } from "react";
import { errorMessageType } from "../type/type";
import classes from "./ErrorMessage.module.scss";

const ErrorMessage: React.FC <errorMessageType> = memo(({ error }) => {
   return (
      <div className={classes.errorMassege}>
         Ошибка получения данных: {error}
      </div>
   );
})

export default ErrorMessage;
