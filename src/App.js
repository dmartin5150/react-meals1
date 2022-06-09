import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import MealsDescription from "./components/MealsDescripton/MealsDescription";
import MainHeader from "./components/MainHeader/MainHeader";
import Menu from "./components/Menu/Menu";
import getMeals from "./dummyMeals.js/dummymeals";
import Backdrop from "./components/UI/Backdrop/Backdrop";
import CartItems from "./components/CartItems/CartItems";

const reduceMeals = (state, updatedMeal) => {
  for (const meal of state) {
    if (meal.id === updatedMeal.id) {
      meal.name = updatedMeal.name;
      meal.description = updatedMeal.description;
      meal.price = updatedMeal.price;
      meal.count = updatedMeal.count;
    }
  }
  return state;
};

function App() {
  // let meals = getMeals();

  const items = [
    { id: 1, name: "Sushi", price: 22.99, count: 1 },
    { id: 2, name: "Schnitzel", price: 16.5, count: 1 },
  ];

  const [totalCartItems, setTotalCartItems] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const addTotalCartItemsHandler = (totalItems, newMeal) => {
    setTotalCartItems((prevItems) => {
      const newTotal = prevItems + +totalItems;
      setTotalCartItems(newTotal);
    });
    dispatchMeal(newMeal);
  };

  const showCart = () => {
    setShowModal(true);
  };

  const hideCart = () => {
    console.log("in hide modal");
    setShowModal(false);
  };

  const [meals, dispatchMeal] = useReducer(reduceMeals, getMeals());

  return (
    <section className="App">
      {showModal &&
        ReactDOM.createPortal(
          <Backdrop onClick={hideCart} />,
          document.getElementById("backdrop-root")
        )}
      {showModal &&
        ReactDOM.createPortal(
          <CartItems items={items} total={88.99} onHideCart={hideCart} />,
          document.getElementById("modal-root")
        )}
      {/* <Backdrop />
      <div className="cartItems">
        <CartItems items={items} total={88.99}/>
      </div> */}
      <MainHeader
        totalItems={totalCartItems}
        onShowCart={showCart}
        onHideCart={hideCart}
      />
      <div className="meal-description">
        <MealsDescription />
      </div>
      <div className="menu">
        <Menu meals={meals} onAddCartItem={addTotalCartItemsHandler}></Menu>
      </div>
    </section>
  );
}

export default App;
