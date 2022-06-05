import React from 'react';
import classes from './Header.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes.MainHeader}>
      <section>
        <h2>React Meals</h2>
      </section>
      <nav>
        <button>Cart</button>
      </nav>
    </header>);

}
export default MainHeader;