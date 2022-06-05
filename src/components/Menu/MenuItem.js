import React from 'react';
import classes from './MenuItem.module.css';

const MenuItem = (props) => {
  return (
    <li className={classes['menu-item']}>
    <div className={classes['menu-description']}>
      <p className={classes['meal-name']}>{props.meal.name}</p>
      <p className={classes['meal-description']}>{props.meal.description}</p>
      <p className={classes['meal-price']}>${props.meal.price}</p>
    </div>
    <div className={classes['menu-actions']}>
      <div>
        <label htmlFor={props.meal.id}>Amount</label>
        <input type="number" id={props.meal.id} name={props.meal.id} />
      </div>
      <button type="button">+Add</button>
    </div>
  </li>
  );
}
export default MenuItem;