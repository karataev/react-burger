import Modal from "../../modal/modal";
import PropTypes from "prop-types";
import {ingredientType} from "../../../utils/types";
import styles from './ingredient-details.module.css';
import DetailItem from "./detail-item";

function IngredientDetails({ingredient, onClose}) {
  return (
    <Modal title="Детали ингредиента" onClose={onClose}>
      <img src={ingredient.image} alt={ingredient.name} />
      <p>{ingredient.name}</p>
      <div className={styles.details}>
        <DetailItem title="Калории,ккал" value={ingredient.calories} />
        <DetailItem title="Белки, г" value={ingredient.proteins} />
        <DetailItem title="Жиры, г" value={ingredient.fat} />
        <DetailItem title="Углеводы, г" value={ingredient.carbohydrates} />
      </div>
    </Modal>
  )
}

IngredientDetails.propTypes = {
  ingredient: ingredientType.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default IngredientDetails;