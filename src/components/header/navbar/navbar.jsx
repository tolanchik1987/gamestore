import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import ItemInCart from "../../cart/itemInCart/ItemInCart";
import classes from "./Navbar.module.scss";

const Navbar = () => {
   const [activeLink, setActiveLink] = useState(0)
   const items = useSelector((state) => state.cart.gameInCart);
   const navigate = useNavigate()

   const handelClick = () => {
      navigate("/home")
   }
   
   return (
      <div className={classes.conteiner_nav}>
         <img
            src="https://homido.ru/upload/iblock/f58/snakebyte-game-store.png"
            alt=""
            onClick={handelClick}
         />
         <nav className={classes.conteiner_links}>
            <NavLink to="/home" onClick={() => setActiveLink(1)} className={activeLink === 1 ? classes.active : ""}>Главная</NavLink>
            <NavLink to="/catalog" onClick={() => setActiveLink(2)} className={activeLink === 2 ? classes.active : ""}>Каталог</NavLink>
            <NavLink to="/about" onClick={() => setActiveLink(3)} className={activeLink === 3 ? classes.active : ""}>О нас</NavLink>
            {items.length > 0 ? (
               <NavLink to="/cart"  onClick={() => setActiveLink(4)} className={activeLink === 4 ? classes.active : classes.itemInCart}>
                  Корзина
                  <ItemInCart />
               </NavLink>
            ) : (
               <NavLink to="/cart" onClick={() => setActiveLink(4)} className={activeLink === 4 ? classes.active : ""}>Корзина</NavLink>
            )}
         </nav>
      </div>
   );
};

export default Navbar;
