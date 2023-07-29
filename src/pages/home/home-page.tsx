import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import styles from './home-page.module.css';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {useParams} from "react-router-dom";
import IngredientPage from "../ingredient/IngredientPage";
import {SET_SELECTED_INGREDIENT} from "../../services/actions/ingredients";
import {JSX, useEffect} from "react";
import {useDispatch} from "react-redux";
import {TIngredient} from "../../utils/types";
import {useSelector} from "../../hooks/hooks";

function HomePage(): JSX.Element {
  const params = useParams();
  const dispatch = useDispatch();
  const {ingredients} = useSelector(store => store.ingredients);

  const ingredientId = params.id;
  const isPopup = !!sessionStorage.getItem('use-ingredient-popup');

  useEffect(() => {
    if (ingredientId && isPopup) {
      const ingredient = ingredients.find((item: TIngredient) => item._id === ingredientId);
      if (ingredient) dispatch({type: SET_SELECTED_INGREDIENT, selectedIngredient: ingredient});
    }
  }, [dispatch, ingredientId, ingredients, isPopup])

  if (ingredientId && !isPopup) return <IngredientPage />

  return (
    <main className={styles.main}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor />
      </DndProvider>
    </main>
  );
}

export default HomePage;
