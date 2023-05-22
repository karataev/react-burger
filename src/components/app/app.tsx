import React from 'react';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from './app.module.css';
import ingredients from '../../utils/data';

function App() {
  return (
    <div className={styles.root}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients ingredients={ingredients} />
        <BurgerConstructor ingredients={ingredients.slice(0, 5)} />
      </main>
    </div>
  );
}

export default App;
