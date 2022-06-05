import './App.css';
import MealsDescription from './components/MealsDescripton/MealsDescription';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  return (
    <section className="App">
      <MainHeader />
      <div className="meal-description">
        <MealsDescription />
      </div>
    </section>
  );
}

export default App;
