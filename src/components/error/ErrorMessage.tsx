import React, { memo } from "react";
import { ErrorMessageType } from "../types/type";
import classes from "./ErrorMessage.module.scss";

const ErrorMessage: React.FC<ErrorMessageType> = memo(({ error }) => {
   return (
      <div className={classes.errorMassege}>
         Ошибка получения данных: {error}
      </div>
   );
});

export default ErrorMessage;
