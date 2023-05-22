import React from 'react';
import styles from './burger-ingredients.module.css';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import data from '../../utils/data';
import IngredientCard from "../ingredient-card/ingredient-card";

export default class BurgerIngredients extends React.Component {
  state = {
    currentTab: 'buns',
  }

  setTab = (value) => {
    this.setState({currentTab: value});
  }

  render() {
    const buns = data.filter(item => item.type === 'bun');
    const sauces = data.filter(item => item.type === 'sauce');
    const fillings = data.filter(item => item.type === 'main');

    return (
      <section className={`pt-10 ${styles.root}`}>
        <h1 className="text text_type_main-large">Соберите бургер</h1>
        <div className={`mt-5 ${styles.tabs}`}>
          <Tab active={this.state.currentTab === 'buns'} value="buns" className={styles.tab} onClick={this.setTab}>
            Булки
          </Tab>
          <Tab active={this.state.currentTab === 'sauces'} value="sauces" onClick={this.setTab}>
            Соусы
          </Tab>
          <Tab active={this.state.currentTab === 'fillings'} value="fillings" onClick={this.setTab}>
            Начинки
          </Tab>
        </div>
        <h2 className="text text_type_main-medium mt-10">Булки</h2>
        <section className={styles.cards}>
          {buns.map(item => {
            return (
              <IngredientCard item={item} key={item._id} />
            )
          })}
        </section>
        <h2 className="text text_type_main-medium mt-10">Соусы</h2>
        <section className={styles.cards}>
          {sauces.map(item => {
            return (
              <IngredientCard item={item} key={item._id} />
            )
          })}
        </section>
        <h2 className="text text_type_main-medium mt-10">Начинки</h2>
        <section className={styles.cards}>
          {fillings.map(item => {
            return (
              <IngredientCard item={item} key={item._id} />
            )
          })}
        </section>
      </section>
    )
  }
}