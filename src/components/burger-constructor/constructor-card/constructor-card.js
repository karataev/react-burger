import React from 'react';
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './constructor-card.module.css';
import {ingredientType} from "../../../utils/types";
import {useDispatch} from "react-redux";

import {CART_ITEM_REMOVE} from "../../../store/actions/cart";

function ConstructorCard({item}) {
  const dispatch = useDispatch();

  function onRemove() {
    dispatch({type: CART_ITEM_REMOVE, key: item.key});
  }

  return (
    <div className={`mb-4 ${styles.root}`}>
      <div className={styles.left}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={item.name}
        thumbnail={item.image_mobile}
        price={item.price}
        extraClass="ml-2"
        handleClose={onRemove}
      />
    </div>
  )
}

ConstructorCard.propTypes = {
  item: ingredientType.isRequired,
}

export default React.memo(ConstructorCard);