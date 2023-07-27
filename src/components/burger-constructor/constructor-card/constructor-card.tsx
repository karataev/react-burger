import React, {JSX} from 'react';
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './constructor-card.module.css';
import {useDispatch} from "react-redux";

import {CART_ITEM_REMOVE, CART_ITEMS_SWAP} from "../../../services/actions/cart";
import {useDrag, useDrop} from "react-dnd";
import {TDropItem, TIngredient} from "../../../utils/types";

type TConstructorCardProps = {
  item: TIngredient;
}


function ConstructorCard({item}: TConstructorCardProps): JSX.Element {
  const dispatch = useDispatch();
  const [, dragRef] = useDrag({
    type: 'constructor',
    item: {ingredient: item},
  })

  const [, dropRef] = useDrop({
    accept: 'constructor',
    drop(droppedItem: TDropItem) {
      if (droppedItem.ingredient.key === item.key) {
        return;
      }

      dispatch({type: CART_ITEMS_SWAP, item1: item, item2: droppedItem.ingredient});
    }
  })

  function onRemove() {
    dispatch({type: CART_ITEM_REMOVE, key: item.key});
  }

  return (
    <div className="mb-4" ref={dragRef}>
      <div className={styles.root} ref={dropRef}>
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
    </div>
  )
}

export default React.memo(ConstructorCard);