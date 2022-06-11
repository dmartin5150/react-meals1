import React, {useContext} from "react";
import classes from "./CartHeaderButton.module.css";
import image from "../../images/shoppingCart.png";
import CartContext from "../../store/cart-context";

const CartHeaderButton = (props) => {

  const cartCtx = useContext(CartContext);


  const showCartHandler = (event) => {
    event.preventDefault();
    props.onShowCart(cartCtx.filteredMeals);
  };

  return (
    <a
      className={classes["cartHeader-button"]}
      href="/"
      onClick={showCartHandler}
    >
      <div className={classes["cartHeader-image"]}>
        <img src={image} alt="shopping cart"></img>
      </div>
      Your Cart
      <div className={classes["cartHeader-count"]}>
        <p>{cartCtx.totalCartItems}</p>
      </div>
    </a>
  );
};
export default CartHeaderButton;
