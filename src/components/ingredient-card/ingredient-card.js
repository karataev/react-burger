import React from 'react';
import styles from './ingredient-card.module.css';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export default class IngredientCard extends React.Component {

  render() {
    const {name, price, image} = this.props.item;

    return (
      <div className={`mt-6 ${styles.root}`}>
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
}
