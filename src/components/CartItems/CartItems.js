import React from "react";
import classes from "./CartItems.module.css";
import Card from "../UI/Card/Card";
import CartItem from "./CartItem";

const CartItems = (props) => {
  console.log("items: ", props.items);
  return (
    <Card className={classes["cart-items"]}>
      <ul>
        {props.items.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </ul>
      <div className={classes["cart-items__total"]}>
        <p>Total Amount</p>
        <p>${props.total}</p>
      </div>
      <div className={classes['cart-items__actions']}>
        <button type="button" className={classes["cart-items__close"]}>
          Close
        </button>
        <button type="button" className={classes["cart-items__order"]}>
          Order
        </button>
      </div>
    </Card>
  );
};

export default CartItems;
