import './App.css';
import MealsDescription from './components/MealsDescripton/MealsDescription';
import MainHeader from './components/MainHeader/MainHeader';
import Menu from './components/Menu/Menu';
import getMeals from './dummyMeals.js/dummymeals';

function App() { 

  const meals = getMeals();

  return (
    <section className="App">
      <MainHeader />
      <div className="meal-description">
        <MealsDescription />
      </div>
      <div className = "menu">
        <Menu meals={meals}></Menu>
      </div>
    </section>
  );
}

export default App;
