import React, {useContext} from 'react';
import classes from './CartItem.module.css';
import CartContext from '../../store/cart-context';

const CartItem = (props) => {

  const cartCtx = useContext(CartContext);

  const removeItem = (event) => {
    event.preventDefault();
    const curMeal = {...props.item};
    curMeal.count = curMeal.count- 1;
    cartCtx.removeCartItemHandler(curMeal);
  }

  const addItem = (event)=> {
    event.preventDefault();
    const curMeal = {...props.item};
    curMeal.count = curMeal.count + 1;
    cartCtx.addCartItemHandler(curMeal);
  }


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
      <button onClick={removeItem}>-</button>
      <button onClick={addItem}>+</button>
    </div>
  </li>
    )

}
export default CartItem;