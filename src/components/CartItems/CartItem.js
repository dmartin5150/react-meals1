import React from 'react';
import classes from './CartItem.module.css';

const CartItem = (props) => {

  return (
    <li className={classes["cart-item"]}>
    <div className={classes["cart-item__description"]}>
      <p className={classes["cart-item__name"]}>{props.item.name}</p>
      <div className={classes["cart-item__cost"]}>
        <p className={classes["cart-item__price"]}>${props.item.price}</p>
        <p className={classes["cart-item__count"]}>x{props.item.count}</p>
      </div>
    </div>
    <div className={classes["cart-item__actions"]}>
      <button>-</button>
      <button>+</button>
    </div>
  </li>
    )

}
export default CartItem;