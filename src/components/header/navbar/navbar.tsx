import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from "./navbar.module.scss"

const Navbar = () => {
  return (
    <div className={classes.conteiner_nav}>
        <img src="https://homido.ru/upload/iblock/f58/snakebyte-game-store.png" alt=""/>
        <nav className={classes.conteiner_links}>
            <NavLink to="/home">Главная</NavLink>
            <NavLink to="/catalog">Каталог</NavLink>
            <NavLink to="/about">О нас</NavLink>
            <NavLink to="/cart">Корзина</NavLink>
        </nav>
    </div>
  )
}

export default Navbar;