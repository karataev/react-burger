import Modal from "../../modal/modal";
import {useDispatch, useSelector} from "react-redux";
import {CLEAR_SELECTED_INGREDIENT} from "../../../services/actions/ingredients";
import IngredientDetails from "./ingredient-details";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../../utils/constants";
import {JSX} from "react";

function IngredientDetailsModal(): JSX.Element | null {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // @ts-ignore
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