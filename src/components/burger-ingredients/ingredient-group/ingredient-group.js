import styles from "./ingredient-group.module.css";
import PropTypes from "prop-types";
import {ingredientType} from "../../../utils/types";
import IngredientCard from "../ingredient-card/ingredient-card";
import {useSelector} from "react-redux";
import {useEffect, useMemo, useRef} from "react";
import {GROUP_BUNS, GROUP_SAUCES} from "../../../utils/constants";

function IngredientGroup({items, type, onIngredientClick}) {
  const titleRef = useRef();
  const currentTab = useSelector(store => store.currentTab);

  const title = useMemo(() => {
    if (type === GROUP_BUNS) return 'Булки';
    if (type === GROUP_SAUCES) return 'Соусы';
    return 'Начинки';
  }, [type])

  useEffect(() => {
    if (currentTab === type && titleRef.current) titleRef.current.scrollIntoView();
  }, [currentTab, type]);

  return (
    <>
      <h2 ref={titleRef} className="text text_type_main-medium pt-10">{title}</h2>
      <ul className={styles.cards}>
        {items.map(item => {
          return (
            <li key={item._id} className={styles.li}>
              <IngredientCard item={item} onIngredientClick={onIngredientClick} />
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
  onIngredientClick: PropTypes.func.isRequired,
}

export default IngredientGroup;