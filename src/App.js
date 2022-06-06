import React,{useState} from 'react';
import "./App.css";
import MealsDescription from "./components/MealsDescripton/MealsDescription";
import MainHeader from "./components/MainHeader/MainHeader";
import Menu from "./components/Menu/Menu";
import getMeals from "./dummyMeals.js/dummymeals";
import Backdrop from "./components/UI/Backdrop/Backdrop";
import CartItems from "./components/CartItems/CartItems";

function App() {
  const meals = getMeals();

  const items = [{id:1, name:'Sushi', price:22.99, count:1},
                  {id:2, name:'Schnitzel',price:16.5,count:1}]

  const [totalCartItems, setTotalCartItems] = useState(0);

  const addTotalCartItemsHandler = (totalItems) => {
    setTotalCartItems((prevItems) => {
      const newTotal = prevItems + +totalItems;
      setTotalCartItems(newTotal);
    });
  }


  return (
    <section className="App">
      {/* <Backdrop />
      <div className="cartItems">
        <CartItems items={items} total={88.99}/>
      </div> */}
      <MainHeader totalItems={totalCartItems} />
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
