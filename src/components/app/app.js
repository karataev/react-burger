import {useEffect} from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from './app.module.css';
import Loader from "../loader/loader";
import {getIngredients} from "../../store/actions/ingredients";
import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch();
  const ingredientsLoading = useSelector(store => store.ingredients.ingredientsLoading);
  const ingredientsError = useSelector(store => store.ingredients.ingredientsError);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div className={styles.root}>
      {ingredientsLoading ? <Loader /> : (
        <>
          {ingredientsError ? <div>Произошла ошибка</div> : (
            <>
              <AppHeader />
              <main className={styles.main}>
                <BurgerIngredients />
                <BurgerConstructor />
              </main>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
