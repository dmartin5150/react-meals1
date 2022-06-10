import React, { useState, useEffect, useReducer } from "react";
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
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const addTotalCartItemsHandler = (totalItems, newMeal) => {
    setTotalCartItems((prevItems) => {
      const newTotal = prevItems + +totalItems;
      setTotalCartItems(newTotal);
    });

    dispatchMeal(newMeal);
  };


  const getFilteredMeals = () => {
      setFilteredMeals((prevFilteredMeals)=> {
        return prevFilteredMeals.filter(meal => meal.count && meal.count > 0);
      })
  } 

  const removeCartItemHandler = (newMeal) => {
    setTotalCartItems((prevItems) => {
      setTotalCartItems(prevItems - 1);
    });
    dispatchMeal(newMeal);
    getFilteredMeals();
  }

  useEffect(()=>{
    let totalPrice = 0;
    for (const curMeal of filteredMeals) {
      totalPrice = totalPrice + curMeal.price *curMeal.count
    }
    setTotalPrice(totalPrice.toFixed(2));
  },[filteredMeals])


  const addCartItemHandler = (newMeal) => {
    setTotalCartItems((prevItems) => {
      setTotalCartItems(prevItems + 1);
    });
    dispatchMeal(newMeal);
    getFilteredMeals();
  }


  const showCart = (filteredMeals) => {
    setShowModal(true);
    setFilteredMeals(filteredMeals);
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
          <CartItems
            totalItems={totalCartItems}
            total={totalPrice}
            filteredMeals={filteredMeals}
            onHideCart={hideCart}
            onaddCartItem={addCartItemHandler}
            onRemoveCartItem={removeCartItemHandler}
          />,
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
        meals={meals}
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
