import React from "react";
import classes from "./CartHeaderButton.module.css";
import image from "../../images/shoppingCart.png";

const CartHeaderButton = (props) => {
  
  return (
    <a className={classes["cartHeader-button"]} href="/">
      <div className={classes["cartHeader-image"]}>
        <img src={image} alt="shopping cart"></img>
      </div>
      Your Cart
      <div className={classes["cartHeader-count"]}>
        <p>{props.totalItems}</p>
      </div>
  </a>



  );
};
export default CartHeaderButton;
