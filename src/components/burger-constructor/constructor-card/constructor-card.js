import React from 'react';
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './constructor-card.module.css';
import PropTypes from "prop-types";
import {ingredientType} from "../../../utils/types";

function ConstructorCard({item, type}) {
  const isTop = type === 'top';
  const isBottom = type === 'bottom';
  const isDragAvailable = !isTop && !isBottom;
  return (
    <div key={item._id} className={`mb-4 ${styles.root}`}>
      <div className={styles.left}>
        {isDragAvailable && <DragIcon type="primary" />}
      </div>
      <ConstructorElement
        type={type}
        text={item.name}
        thumbnail={item.image_mobile}
        price={item.price}
        extraClass="ml-2"
        isLocked={isTop || isBottom}
      />
    </div>
  )
}

ConstructorCard.propTypes = {
  type: PropTypes.string,
  item: ingredientType.isRequired,
}

export default React.memo(ConstructorCard);