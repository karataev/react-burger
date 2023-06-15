import React from 'react';
import styles from './ingredient-card.module.css';
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ingredientType} from "../../../utils/types";
import {useDispatch} from "react-redux";
import {CART_BUN_SET, CART_ITEM_ADD} from "../../../store/actions/cart";
import {SET_SELECTED_INGREDIENT} from "../../../store/actions/ingredients";

function IngredientCard({item}) {
  const {name, price, image} = item;

  const dispatch = useDispatch();

  function handleClick() {
    dispatch({type: SET_SELECTED_INGREDIENT, selectedIngredient: item});
    if (item.type === 'bun') {
      dispatch({type: CART_BUN_SET, bun: item});
    } else {
      dispatch({type: CART_ITEM_ADD, item});
    }
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
}

export default React.memo(IngredientCard);