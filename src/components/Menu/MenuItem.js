import React from 'react';
import classes from './MenuItem.module.css';

const MenuItem = (props) => {

  const submitCartHandler = (event)=> {
    event.preventDefault();
    console.log(event.target[0].id);
    props.onAddItem(event.target[0].value);
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