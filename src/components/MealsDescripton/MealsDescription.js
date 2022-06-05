import React from "react";
import classes from "./MealsDescription.module.css";

const MealsDescription = (props) => {
  return (
    <div className={classes['meal-description']}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of avalable meals and
        enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </div>
  );
};

export default MealsDescription;
