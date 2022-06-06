import React from "react";
import classes from "./Menu.module.css";
import Card from "../UI/Card/Card";
import MenuItem from "./MenuItem";

const Menu = (props) => {


  return (
    <Card className={classes["menu-items"]}>
      <ul>
        {props.meals.map((meal) => {
          return <MenuItem meal={meal}  key={meal.id} onAddItem={props.onAddCartItem}/>;
        })}
      </ul>
    </Card>
  );
};
export default Menu;
