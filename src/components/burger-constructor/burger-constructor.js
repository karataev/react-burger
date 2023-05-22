import React from "react";
import styles from './burger-constructor.module.css';
import ConstructorCard from "../constructor-card/constructor-card";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export default class BurgerConstructor extends React.Component {

  render() {
    const {ingredients} = this.props;
    return (
      <div className={`pl-4 pt-25 pr-4 ${styles.root}`}>
        {ingredients.map((item, index) => {
          let type;
          if (index === 0) type = 'top';
          else if (index === ingredients.length - 1) type = 'bottom';

          return (
            <ConstructorCard key={item._id} item={item} type={type} />
          )
        })}

        <footer className={`mt-10 ${styles.footer}`}>
          <div className="mr-10">
            <span className="text text_type_digits-medium mr-2">610</span>
            <CurrencyIcon type="primary" />
          </div>
          <Button type="primary" htmlType="button" size="large">Оформить заказ</Button>
        </footer>
      </div>
    )
  }
}
