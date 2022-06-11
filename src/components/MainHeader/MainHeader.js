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
          onShowCart={props.onShowCart}
          onHideCart={props.onHideCart}
        />
      </nav>
    </header>
  );
};
export default MainHeader;
