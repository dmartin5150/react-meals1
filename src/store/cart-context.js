import React, {useState, useEffect,useReducer} from 'react';
import getMeals from "../dummyMeals/dummymeals";

const CartContext = React.createContext({
   totalCartItems: 0,
   totalPrice: 0,
   meals:[],
   filteredMeals:[],
   addTotalCartItemsHandler:()=>{},
   removeCartItemHandler:()=>{},
   addCartItemHandler: ()=>{}
});
export default CartContext;



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

export const CartContextProvider = (props)=> {

  const [filteredMeals, setFilteredMeals] = useState([]);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [meals, dispatchMeal] = useReducer(reduceMeals, getMeals());


  const addTotalCartItemsHandler = (totalItems, newMeal) => {
    setTotalCartItems((prevItems) => {
      const newTotal = prevItems + +totalItems;
      setTotalCartItems(newTotal);
    });
    dispatchMeal(newMeal);
  };

  useEffect(() => {
    setFilteredMeals(()=> {
      const curMeals = [...meals];
      return curMeals.filter(meal => meal.count && meal.count > 0);
    })
},[meals,totalCartItems]); 


const removeCartItemHandler = (newMeal) => {
  setTotalCartItems((prevItems) => {
    setTotalCartItems(prevItems - 1);
  });
  dispatchMeal(newMeal);
}


const addCartItemHandler = (newMeal) => {
  setTotalCartItems((prevItems) => {
    setTotalCartItems(prevItems + 1);
  });
  dispatchMeal(newMeal);
}


useEffect(()=>{
  let totalPrice = 0;
  for (const curMeal of filteredMeals) {
    totalPrice = totalPrice + curMeal.price *curMeal.count
  }
  setTotalPrice(totalPrice.toFixed(2));
},[filteredMeals])


  return(<CartContext.Provider value={{
    totalCartItems: totalCartItems,
    totalPrice:totalPrice,
    meals:meals,
    filteredMeals:filteredMeals,
    addTotalCartItemsHandler:addTotalCartItemsHandler,
    removeCartItemHandler:removeCartItemHandler,
    addCartItemHandler:addCartItemHandler 
  }}>{props.children}</CartContext.Provider>)

}