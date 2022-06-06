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

  return (
    <section className="App">
      <Backdrop />
      <div className="cartItems">
        <CartItems items={items} total={88.99}/>
      </div>
      <MainHeader />
      <div className="meal-description">
        <MealsDescription />
      </div>
      <div className="menu">
        <Menu meals={meals}></Menu>
      </div>
    </section>
  );
}

export default App;
