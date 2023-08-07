import Modal from "../../modal/modal";
import {CLEAR_SELECTED_INGREDIENT} from "../../../services/actions/ingredients";
import IngredientDetails from "./ingredient-details";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../../utils/constants";
import {JSX} from "react";
import {useDispatch, useSelector} from "../../../hooks/hooks";

function IngredientDetailsModal(): JSX.Element | null {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {selectedIngredient: ingredient} = useSelector(store => store.ingredients);

  function onClose() {
    dispatch({type: CLEAR_SELECTED_INGREDIENT});
    navigate(ROUTES.HOME);
  }

  if (!ingredient) return null;

  return (
    <Modal title="Детали ингредиента" onClose={onClose}>
      <IngredientDetails ingredient={ingredient} />
    </Modal>
  )
}

export default IngredientDetailsModal;