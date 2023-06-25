import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import IngredientDetails from "../../components/burger-ingredients/ingredient-details/ingredient-details";

function IngredientPage() {
  const {id} = useParams();
  const {ingredients} = useSelector(store => store.ingredients);

  const ingredient = ingredients.find(item => item._id === id);

  if (!ingredient) return <div>no with id {id}</div>

  return <IngredientDetails ingredient={ingredient} />
}

export default IngredientPage;