import React, {useState, useEffect,useReducer} from 'react';
import getMeals from "../dummyMeals/dummymeals";

const CartContext = React.createContext({
   totalPrice: 0,
   filteredMeals:[],
   cartItems:[],
   dispatchCartItems: ()=>{}

});
export default CartContext;



const updateMeals = (newMeal, meals) => {
  const curMeals = [...meals];
  for (const meal of curMeals) {
    if (meal.id === newMeal.id){
      meal.count = newMeal.count;
    }
  }
  return curMeals;
}

const initializeCart = () => {
  return {totalItems: 0, meals: getMeals()}
}

const reduceCart = (prevCart, action ) => {
  if (action.type === 'AddMenuItem') {
    const newTotal = prevCart.totalItems + +action.newItemCount;
    const newMeals = updateMeals(action.newMeal,prevCart.meals);
    return {totalItems:newTotal, meals:newMeals};
  }
  if (action.type === 'RemoveCartItem') {
    const newTotal = prevCart.totalItems - 1;
    const newMeals = updateMeals(action.newMeal,prevCart.meals);
    return {totalItems:newTotal, meals:newMeals};
  }
  if (action.type === 'AddCartItem') {
    console.log('Meal:', action.newMeal);
    const newTotal = prevCart.totalItems  + 1;
    const newMeals = updateMeals(action.newMeal,prevCart.meals);
    console.log('new meals ', newMeals);
    return {totalItems:newTotal, meals:newMeals};
  }
  return initializeCart();

}

export const CartContextProvider = (props)=> {

  const [filteredMeals, setFilteredMeals] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, dispatchCartItems] = useReducer(reduceCart,initializeCart())


  useEffect(() => {
    setFilteredMeals(()=> {
      const curMeals = [...cartItems.meals];
      return curMeals.filter(meal => meal.count && meal.count > 0);
    })
},[cartItems]); 



useEffect(()=>{
  let totalPrice = 0;
  for (const curMeal of filteredMeals) {
    totalPrice = totalPrice + curMeal.price *curMeal.count
  }
  setTotalPrice(totalPrice.toFixed(2));
},[filteredMeals])


  return(<CartContext.Provider value={{
    cartItems:cartItems,
    totalPrice:totalPrice,
    filteredMeals:filteredMeals,
    dispatchCartItems:dispatchCartItems,
  }}>{props.children}</CartContext.Provider>)

}