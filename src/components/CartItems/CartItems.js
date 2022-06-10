import React from "react";
import classes from "./CartItems.module.css";
import Card from "../UI/Card/Card";
import CartItem from "./CartItem";



const CartItems = (props) => {
  // console.log("items: ", props.items);


  const orderCartHandler = (event) => {
    event.preventDefault();
    console.log('Placing Order');
  }

  const hideCartHandler = (event) => {
    event.preventDefault();
    props.onHideCart();
  }


  return (
    <Card className={classes["cart-items"]}>
      <ul>
        {props.filteredMeals.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </ul>
      <div className={classes["cart-items__total"]}>
        <p>Total Amount</p>
        <p>${props.total}</p>
      </div>
      <div className={classes['cart-items__actions']}>
        <button type="button" className={classes["cart-items__close"]} onClick={hideCartHandler}>
          Close
        </button>
        <button type="button" className={classes["cart-items__order"]} onClick={orderCartHandler}>
          Order
        </button>
      </div>
    </Card>
  );
};

export default CartItems;
