import React from 'react';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from './app.module.css';
import ingredients from '../../utils/data';

function App() {
  const constructorItems = [
    {...ingredients[0], isLocked: true},
    ingredients[2],
    ingredients[3],
    {...ingredients[14], isLocked: true},
  ]
  return (
    <div className={styles.root}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients ingredients={ingredients} />
        <BurgerConstructor items={constructorItems} />
      </main>
    </div>
  );
}

export default App;
