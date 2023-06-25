import styles from "./ingredient-details.module.css";
import DetailItem from "./detail-item";
import {ingredientType} from "../../../utils/types";

function IngredientDetails({ingredient}) {
  return (
    <section className={`mt-30 ${styles.main}`}>
      <img src={ingredient.image_large} alt={ingredient.name} />
      <p className="text text_type_main-medium mb-8">{ingredient.name}</p>
      <div className={styles.details}>
        <DetailItem title="Калории,ккал" value={ingredient.calories} />
        <DetailItem title="Белки, г" value={ingredient.proteins} />
        <DetailItem title="Жиры, г" value={ingredient.fat} />
        <DetailItem title="Углеводы, г" value={ingredient.carbohydrates} />
      </div>
    </section>
  )
}

IngredientDetails.propTypes = {
  ingredient: ingredientType.isRequired,
}

export default IngredientDetails;

