import React from 'react'
import { useSelector } from 'react-redux'
import classes from "./ItemInCart.module.scss"

const ItemInCart = () => {
  const items = useSelector(state => state.cart.gameInCart);
  const increment = items.length;

  return (
    <div className={classes.conteiner__increment}>
      <div className={classes.increment}>{increment}</div>
      <div className={classes.visible}>{items.map(item => <div>{item.title} - {item.price} руб.</div>)}</div>
    </div>
  )
}

export default ItemInCart