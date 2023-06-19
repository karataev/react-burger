import {useEffect} from "react";
import AppHeader from "../../components/app-header/app-header";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import styles from './home-page.module.css';
import Loader from "../../components/loader/loader";
import {getIngredients} from "../../services/actions/ingredients";
import {useDispatch, useSelector} from "react-redux";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function HomePage() {
  const dispatch = useDispatch();
  const ingredientsLoading = useSelector(store => store.ingredients.ingredientsLoading);
  const ingredientsError = useSelector(store => store.ingredients.ingredientsError);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div>
      {ingredientsLoading ? <Loader /> : (
        <>
          {ingredientsError ? <div>Произошла ошибка</div> : (
            <>
              <AppHeader />
              <main className={styles.main}>
                <DndProvider backend={HTML5Backend}>
                  <BurgerIngredients />
                  <BurgerConstructor />
                </DndProvider>
              </main>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default HomePage;
