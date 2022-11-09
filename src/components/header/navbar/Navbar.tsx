import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavigateFunction, NavLink, useNavigate } from "react-router-dom";
import { GameType } from "../../types/type";
import { gameInCartSelector } from "../../store/cartReducer/cartSlice";
import ItemInCart from "../../cart/itemInCart/ItemInCart";
import classes from "./Navbar.module.scss";

const Navbar: React.FC = () => {
   const [activeLink, setActiveLink] = useState<number>(0);
   const items: GameType[] = useSelector(gameInCartSelector);
   const navigate: NavigateFunction = useNavigate();

   const handelClick = (): void => {
      navigate("/");
   };

   return (
      <div className={classes.conteiner_nav}>
         <img
            src="https://homido.ru/upload/iblock/f58/snakebyte-game-store.png"
            alt=""
            onClick={handelClick}
         />
         <nav className={classes.conteiner_links}>
            <NavLink
               to="/"
               onClick={() => setActiveLink(1)}
               className={activeLink === 1 ? classes.active : ""}
            >
               Главная
            </NavLink>
            <NavLink
               to="/catalog"
               onClick={() => setActiveLink(2)}
               className={activeLink === 2 ? classes.active : ""}
            >
               Каталог
            </NavLink>
            <NavLink
               to="/about"
               onClick={() => setActiveLink(3)}
               className={activeLink === 3 ? classes.active : ""}
            >
               О нас
            </NavLink>
            {items.length > 0 ? (
               <NavLink
                  to="/cart"
                  onClick={() => setActiveLink(4)}
                  className={
                     activeLink === 4 ? classes.active : classes.itemInCart
                  }
               >
                  Корзина
                  <ItemInCart />
               </NavLink>
            ) : (
               <NavLink
                  to="/cart"
                  onClick={() => setActiveLink(4)}
                  className={activeLink === 4 ? classes.active : ""}
               >
                  Корзина
               </NavLink>
            )}
         </nav>
      </div>
   );
};

export default Navbar;
