import React from "react";
import classes from "./About.module.scss";

const About = () => {
   return <div className={classes.conteiner_about}>
      <article>Этот магазин игр разработан на React.
         Он появился из-за огромной любви автора к своему делу! )))
         Мой профиль на GitHub: <a href="https://github.com/tolanchik1987" alt="">https://github.com/tolanchik1987</a>
      </article>
   </div>;
};

export default About;
