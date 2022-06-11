import React, {useContext} from 'react';
import classes from './MenuItem.module.css';
import CartContext from '../../store/cart-context';

const MenuItem = (props) => {

  const cartCtx = useContext(CartContext);


  const submitCartHandler = (event)=> {
    event.preventDefault();
    const newItemCount = event.target[0].value;
    if (!props.meal.count) {
      props.meal.count = +event.target[0].value;
    } else {
      props.meal.count += +event.target[0].value;
    }
    cartCtx.dispatchCartItems({type:'AddMenuItem', newItemCount:newItemCount, newMeal: props.meal});
  };


  return (
    <li className={classes['menu-item']}>
    <div className={classes['menu-description']}>
      <p className={classes['meal-name']}>{props.meal.name}</p>
      <p className={classes['meal-description']}>{props.meal.description}</p>
      <p className={classes['meal-price']}>${props.meal.price}</p>
    </div>
    <form className={classes['menu-actions']} onSubmit={submitCartHandler}>
      <div>
        <label htmlFor={props.meal.id}>Amount</label>
        <input type="number" id={props.meal.id} name={props.meal.id} defaultValue={1} min={1} step={1} />
      </div>
      <button type="submit">+Add</button>
    </form>
  </li>
  );
}
export default MenuItem;