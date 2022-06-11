import React, {useContext} from "react";
import classes from "./Menu.module.css";
import Card from "../UI/Card/Card";
import MenuItem from "./MenuItem";
import CartContext from "../../store/cart-context";

const Menu = (props) => {

  const cartCtx = useContext(CartContext);

  return (
    <Card className={classes["menu-items"]}>
      <ul>
        {cartCtx.meals.map((meal) => {
          return <MenuItem meal={meal}  key={meal.id}/>;
        })}
      </ul>
    </Card>
  );
};
export default Menu;
