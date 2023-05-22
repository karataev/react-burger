import React from 'react';
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './constructor-card.module.css';

export default class ConstructorCard extends React.Component {
  render() {
    const {item, type} = this.props;
    return (
      <div key={item._id} className={`mb-4 ${styles.root}`}>
        <DragIcon type="primary" />
        <ConstructorElement
          type={type}
          text={item.name}
          thumbnail={item.image_mobile}
          price={item.price}
          extraClass="ml-2"
        />
      </div>
    )
  }
}