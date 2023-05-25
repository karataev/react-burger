import Modal from "../../modal/modal";
import PropTypes from "prop-types";
import {ingredientType} from "../../../utils/types";
import styles from './ingredient-details.module.css';
import DetailItem from "./detail-item";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function IngredientDetails({ingredient, onClose}) {
  return (
    <Modal onClose={onClose}>
      <article className={styles.inner}>
        <header className={styles.header}>
          <h1 className="text text_type_main-large">Детали ингредиента</h1>
          <CloseIcon type="primary" onClick={onClose} />
        </header>
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
      </article>
    </Modal>
  )
}

IngredientDetails.propTypes = {
  ingredient: ingredientType.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default IngredientDetails;