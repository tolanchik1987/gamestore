import React, { useState } from "react";
import classes from "./JenersItem.module.scss";

const JenersItem = () => {
   const [activeJanre, setActiveJanre] = useState(0);

   const category = [
      "Экшен",
      "Приключения",
      "Стратегии",
      "РПГ",
      "Гонки",
      "Симулятор",
      "Открытый мир",
      "Шутер",
      "Война",
      "Глубокий сюжет",
      "Протагонистка",
   ];

   return (
      <div>
         <div className={classes.categoryList}>
            <ul>
               {category.map((item,index) => <li
                  className={activeJanre === index ? classes.active : ""}
                  onClick={() => setActiveJanre(index)}
               >{item}</li>)}
            </ul>
         </div>
      </div>
   );
};

export default JenersItem;
