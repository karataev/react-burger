import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import IngredientDetails from "../../components/burger-ingredients/ingredient-details/ingredient-details";
import {useMemo} from "react";

function IngredientPage() {
  const {id} = useParams();
  const {ingredients} = useSelector(store => store.ingredients);

  const ingredient = useMemo(() => ingredients.find(item => item._id === id), [ingredients, id]);

  if (!ingredient) return <p>Ингредиент с id {id} не найден</p>

  return <IngredientDetails ingredient={ingredient} />
}

export default IngredientPage;