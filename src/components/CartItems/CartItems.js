import React, {useContext} from "react";
import classes from "./CartItems.module.css";
import Card from "../UI/Card/Card";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const CartItems = (props) => {

  const cartCtx = useContext(CartContext);

  const orderCartHandler = (event) => {
    event.preventDefault();
    console.log("Placing Order");
  };

  const hideCartHandler = (event) => {
    event.preventDefault();
    props.onHideCart();
  };

  return (
    <Card className={classes["cart-items"]}>
      <ul>
        {cartCtx.filteredMeals.map((item) => {
          return (
            <CartItem
              item={item}
              key={item.id}
            />
          );
        })}
      </ul>
      <div className={classes["cart-items__total"]}>
        {cartCtx.filteredMeals.length === 0 && <p>No Items in Cart</p>}
        {cartCtx.filteredMeals.length !== 0 && (
          <React.Fragment>
            <p>Total Amount</p>
            <p>${cartCtx.totalPrice}</p>
          </React.Fragment>
        )}
      </div>
      <div className={classes["cart-items__actions"]}>
        <button
          type="button"
          className={classes["cart-items__close"]}
          onClick={hideCartHandler}
        >
          Close
        </button>
        <button
          type="button"
          className={classes["cart-items__order"]}
          onClick={orderCartHandler}
        >
          Order
        </button>
      </div>
    </Card>
  );
};

export default CartItems;
