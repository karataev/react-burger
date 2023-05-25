import styles from "./ingredient-group.module.css";
import PropTypes from "prop-types";
import {ingredientType} from "../../../utils/types";
import IngredientCard from "../ingredient-card/ingredient-card";

function IngredientGroup({items, title}) {
  return (
    <>
      <h2 className="text text_type_main-medium mt-10">{title}</h2>
      <ul className={styles.cards}>
        {items.map(item => {
          return (
            <li key={item._id} className={styles.li}>
              <IngredientCard item={item} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

IngredientGroup.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(ingredientType).isRequired,
}

export default IngredientGroup;