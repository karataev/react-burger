import Modal from "../../modal/modal";
import {useDispatch, useSelector} from "react-redux";
import {CLEAR_SELECTED_INGREDIENT} from "../../../services/actions/ingredients";
import IngredientDetails from "./ingredient-details";

function IngredientDetailsModal() {
  const dispatch = useDispatch();
  const {selectedIngredient: ingredient} = useSelector(store => store.ingredients);

  function onClose() {
    dispatch({type: CLEAR_SELECTED_INGREDIENT});
  }

  if (!ingredient) return null;

  return (
    <Modal title="Детали ингредиента" onClose={onClose}>
      <IngredientDetails ingredient={ingredient} />
    </Modal>
  )
}

export default IngredientDetailsModal;