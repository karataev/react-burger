import {useEffect, useState} from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from './app.module.css';
import Loader from "../loader/loader";
import {fetchIngredientsApi} from "../../api/burger-api";
import {ConstructorContext} from "../../services/appContext";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [state, setState] = useState({
    isLoading: true,
    hasError: false,
    ingredients: [],
    constructorItems: [],
  })
  const [constructorItems, setConstructorItems] = useState([]);

  useEffect(() => {
    function addId(item) {
      return {
        ...item,
        id: uuidv4(),
      }
    }
    function fetchIngredients() {
      fetchIngredientsApi()
        .then(res => {
          const ingredients = res.data;
          setState({
            isLoading: false,
            hasError: false,
            ingredients,
          });
          setConstructorItems([
            addId(ingredients[0]),
            addId(ingredients[2]),
            addId(ingredients[3]),
            addId(ingredients[0]),
          ]);
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
                <ConstructorContext.Provider value={{items: constructorItems}}>
                  <BurgerConstructor />
                </ConstructorContext.Provider>
              </main>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
