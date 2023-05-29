import React from 'react';
import styles from './ingredient-card.module.css';
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ingredientType} from "../../../utils/types";
import PropTypes from "prop-types";

function IngredientCard({item, onIngredientClick}) {
  const {name, price, image} = item;

  function handleClick() {
    onIngredientClick(item);
  }

  return (
    <div className={`mt-6 ${styles.root}`} onClick={handleClick}>
      <Counter count={1} size="default" />
      <div>
        <img src={image} alt={name} className={styles.img} />
      </div>
      <div className={`text text_type_digits-default mt-1 ${styles.price}`}>
        <span>{price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <div className={`text text_type_main-default mt-1 ${styles.name}`}>
        {name}
      </div>
    </div>
  )
}

IngredientCard.propTypes = {
  item: ingredientType.isRequired,
  onIngredientClick: PropTypes.func.isRequired,
}

export default React.memo(IngredientCard);