import React from "react";
import classes from "./CartHeaderButton.module.css";
import image from "../../images/shoppingCart.png";

const CartHeaderButton = (props) => {
  const filterMeals = () => {
    return props.meals.filter((meal) => meal.count && meal.count > 0);
  };



  // const calculateTotalPrice = (cartArray) => {
  //     let totalPrice = 0;
  //     for (const curMeal of cartArray) {
  //       totalPrice = totalPrice + curMeal.price *curMeal.count
  //     }
  //     return totalPrice;
  // };

  const showCartHandler = (event) => {
    event.preventDefault();
    const filteredMeals = filterMeals();
    // const totalPrice = calculateTotalPrice(filteredMeals);
    props.onShowCart(filteredMeals);
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
        <p>{props.totalItems}</p>
      </div>
    </a>
  );
};
export default CartHeaderButton;
