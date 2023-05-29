import {useEffect, useState} from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from './app.module.css';
import Loader from "../loader/loader";
import {fetchIngredientsApi} from "../../api/burger-api";

function App() {
  const [state, setState] = useState({
    isLoading: true,
    hasError: false,
    ingredients: [],
    constructorItems: [],
  })

  useEffect(() => {
    function fetchIngredients() {
      fetchIngredientsApi()
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
      {state.isLoading ? <Loader /> : (
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
