import {useEffect, useState} from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from './app.module.css';

const INGREDIENTS_URL = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
  const [state, setState] = useState({
    isLoading: true,
    hasError: false,
    ingredients: [],
    constructorItems: [],
  })

  useEffect(() => {
    function fetchIngredients() {
      fetch(INGREDIENTS_URL)
        .then(res => res.json())
        .then(res => {
          const ingredients = res.data;
          setState({
            isLoading: false,
            hasError: false,
            ingredients,
            constructorItems: [
              ingredients[0],
              ingredients[2],
              ingredients[3],
              {
                ...ingredients[0],
                _id: ingredients[0]._id + '_bottom',
              },
            ]
          })
        })
        .catch(() => {
          setState(s => ({
            ...s,
            isLoading: false,
            hasError: true,
          }))
        })
    }

    setState(s => ({
      ...s,
      isLoading: true,
    }))
    fetchIngredients();
  }, [])

  return (
    <div className={styles.root}>
      {state.isLoading ? <div>Загрузка...</div> : (
        <>
          {state.hasError ? <div>Произошла ошибка</div> : (
            <>
              <AppHeader />
              <main className={styles.main}>
                <BurgerIngredients ingredients={state.ingredients} />
                <BurgerConstructor items={state.constructorItems} />
              </main>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
