import React, {useMemo} from 'react';
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './constructor-card.module.css';
import PropTypes from "prop-types";
import {ingredientType} from "../../../utils/types";
import {useDispatch} from "react-redux";
import {CART_ITEM_REMOVE} from "../../../store/actions";

function ConstructorCard({item, type}) {
  const isTop = type === 'top';
  const isBottom = type === 'bottom';
  const isDragAvailable = !isTop && !isBottom;

  const title = useMemo(() => {
    if (isTop) return `${item.name} (верх)`;
    if (isBottom) return `${item.name} (низ)`;
    return item.name;
  }, [item, isTop, isBottom]);

  const dispatch = useDispatch();

  function onRemove() {
    dispatch({type: CART_ITEM_REMOVE, id: item.id});
  }

  return (
    <div key={item._id} className={`mb-4 ${styles.root}`}>
      <div className={styles.left}>
        {isDragAvailable && <DragIcon type="primary" />}
      </div>
      <ConstructorElement
        type={type}
        text={title}
        thumbnail={item.image_mobile}
        price={item.price}
        extraClass="ml-2"
        isLocked={isTop || isBottom}
        handleClose={onRemove}
      />
    </div>
  )
}

ConstructorCard.propTypes = {
  type: PropTypes.string,
  item: ingredientType.isRequired,
}

export default React.memo(ConstructorCard);