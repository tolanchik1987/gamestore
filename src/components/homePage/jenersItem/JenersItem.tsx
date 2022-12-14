import React, { memo, useState } from "react";
import classes from "./JenersItem.module.scss";

const JenersItem: React.FC = memo(() => {
   const [activeJanre, setActiveJanre] = useState<number>(0);

   const category: string[] = [
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
               {category.map((item, index) => (
                  <li
                     key={item}
                     className={activeJanre === index ? classes.active : ""}
                     onClick={() => setActiveJanre(index)}
                  >
                     {item}
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
})

export default JenersItem;
