import React from "react";
import classes from "./MainHeader.module.css";
import CartHeaderButton from "../CartHeaderButton/CartHeaderButton";

const MainHeader = (props) => {
  return (
    <header className={classes.mainHeader}>
      <section>
        <h2>React Meals</h2>
      </section>
      <nav>
        <CartHeaderButton
          filteredMeals ={props.filteredMeals}
          totalItems={props.totalItems}
          onShowCart={props.onShowCart}
          onHideCart={props.onHideCart}
          meals={props.meals}
        />
      </nav>
    </header>
  );
};
export default MainHeader;
