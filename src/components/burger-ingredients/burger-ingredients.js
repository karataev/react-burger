import {useState} from 'react';
import styles from './burger-ingredients.module.css';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCard from "../ingredient-card/ingredient-card";
import PropTypes from "prop-types";
import {ingredientType} from "../../utils/types";

function BurgerIngredients({ingredients}) {
  const [currentTab, setCurrentTab] = useState('buns');

  const buns = ingredients.filter(item => item.type === 'bun');
  const sauces = ingredients.filter(item => item.type === 'sauce');
  const fillings = ingredients.filter(item => item.type === 'main');

  return (
    <section className={`pt-10 ${styles.root}`}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div className={`mt-5 ${styles.tabs}`}>
        <Tab active={currentTab === 'buns'} value="buns" className={styles.tab} onClick={setCurrentTab}>
          Булки
        </Tab>
        <Tab active={currentTab === 'sauces'} value="sauces" onClick={setCurrentTab}>
          Соусы
        </Tab>
        <Tab active={currentTab === 'fillings'} value="fillings" onClick={setCurrentTab}>
          Начинки
        </Tab>
      </div>
      <div className={styles.scrollable}>
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
      </div>
    </section>
  )}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType).isRequired,
}

export default BurgerIngredients;