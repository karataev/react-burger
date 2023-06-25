import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import IngredientDetails from "../../components/burger-ingredients/ingredient-details/ingredient-details";

function IngredientPage() {
  const {id} = useParams();
  const {ingredients} = useSelector(store => store.ingredients);

  const ingredient = ingredients.find(item => item._id === id);

  if (!ingredient) return <p>Ингредиент с id {id} не найден</p>

  return <IngredientDetails ingredient={ingredient} />
}

export default IngredientPage;