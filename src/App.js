import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import MealsDescription from "./components/MealsDescripton/MealsDescription";
import MainHeader from "./components/MainHeader/MainHeader";
import Menu from "./components/Menu/Menu";
import Backdrop from "./components/UI/Backdrop/Backdrop";
import CartItems from "./components/CartItems/CartItems";




function App() {
 
  const [showModal, setShowModal] = useState(false);

  const showCart = () => {
    setShowModal(true);
  };

  const hideCart = () => {
    setShowModal(false);
  };


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
            onHideCart={hideCart}
          />,
          document.getElementById("modal-root")
        )}
      <MainHeader
        onShowCart={showCart}
        onHideCart={hideCart}
      />
      <div className="meal-description">
        <MealsDescription />
      </div>
      <div className="menu">
        <Menu />
      </div>
    </section>
  );
}

export default App;
