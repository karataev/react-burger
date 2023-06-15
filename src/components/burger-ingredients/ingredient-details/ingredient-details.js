import Modal from "../../modal/modal";
import styles from './ingredient-details.module.css';
import DetailItem from "./detail-item";
import {useDispatch, useSelector} from "react-redux";
import {SET_SELECTED_INGREDIENT} from "../../../store/actions/ingredients";

function IngredientDetails() {
  const dispatch = useDispatch();
  const {selectedIngredient: ingredient} = useSelector(store => store.ingredients);

  function onClose() {
    dispatch({type: SET_SELECTED_INGREDIENT, selectedIngredient: null});
  }

  if (!ingredient) return null;

  return (
    <Modal title="Детали ингредиента" onClose={onClose}>
      <section className={styles.main}>
        <img src={ingredient.image_large} alt={ingredient.name} />
        <p className="text text_type_main-medium mb-8">{ingredient.name}</p>
        <div className={styles.details}>
          <DetailItem title="Калории,ккал" value={ingredient.calories} />
          <DetailItem title="Белки, г" value={ingredient.proteins} />
          <DetailItem title="Жиры, г" value={ingredient.fat} />
          <DetailItem title="Углеводы, г" value={ingredient.carbohydrates} />
        </div>
      </section>
    </Modal>
  )
}

export default IngredientDetails;