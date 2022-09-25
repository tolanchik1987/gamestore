import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ItemInCart from '../../btn_delete/ItemInCart';
import classes from "./Navbar.module.scss"

const Navbar = () => {
  const items = useSelector(state => state.cart.gameInCart)

  return (
    <div className={classes.conteiner_nav}>
        <img src="https://homido.ru/upload/iblock/f58/snakebyte-game-store.png" alt=""/>
        <nav className={classes.conteiner_links}>
            <NavLink to="/home">Главная</NavLink>
            <NavLink to="/catalog">Каталог</NavLink>
            <NavLink to="/about">О нас</NavLink>
            {items.length > 0 ? (<NavLink to="/cart" className={classes.itemInCart}>Корзина<ItemInCart /></NavLink>) : (<NavLink to="/cart">Корзина</NavLink>)}
        </nav>
    </div>
  )
}

export default Navbar;