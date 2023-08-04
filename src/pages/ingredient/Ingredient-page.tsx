import {useParams} from "react-router-dom";
import IngredientDetails from "../../components/burger-ingredients/ingredient-details/ingredient-details";
import {JSX, useMemo} from "react";
import {TIngredient} from "../../utils/types";
import {useSelector} from "../../hooks/hooks";

function IngredientPage(): JSX.Element {
  const {id} = useParams();
  const {ingredients} = useSelector(store => store.ingredients);

  const ingredient = useMemo(() => ingredients.find((item: TIngredient) => item._id === id), [ingredients, id]);

  if (!ingredient) return <p>Ингредиент с id {id} не найден</p>

  return <IngredientDetails ingredient={ingredient} />
}

export default IngredientPage;