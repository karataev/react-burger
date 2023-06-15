import styles from "./ingredient-group.module.css";
import PropTypes from "prop-types";
import {ingredientType} from "../../../utils/types";
import IngredientCard from "../ingredient-card/ingredient-card";
import {useMemo} from "react";
import {GROUP_BUNS, GROUP_SAUCES} from "../../../utils/constants";

function IngredientGroup({items, type, groupRef}) {
  const title = useMemo(() => {
    if (type === GROUP_BUNS) return 'Булки';
    if (type === GROUP_SAUCES) return 'Соусы';
    return 'Начинки';
  }, [type])

  return (
    <>
      <h2 ref={groupRef} className="text text_type_main-medium pt-10">{title}</h2>
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
  type: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(ingredientType).isRequired,
}

export default IngredientGroup;