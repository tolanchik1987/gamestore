import React from "react";
import classes from "./Footer.module.scss";

const Footer:React.FC = () => {
   return (
      <div className={classes.conteiner__foter}>
         <b>Анатолий Минеев &copy; 2022</b>
      </div>
   );
};

export default Footer;
