import {useMemo, useState} from 'react';
import styles from './burger-ingredients.module.css';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {ingredientType} from "../../utils/types";
import IngredientGroup from "./ingredient-group/ingredient-group";
import IngredientDetails from "./ingredient-details/ingredient-details";

function BurgerIngredients({ingredients}) {
  const [currentTab, setCurrentTab] = useState('buns');
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  const buns = useMemo(() => ingredients.filter(item => item.type === 'bun'), [ingredients]);
  const sauces = useMemo(() => ingredients.filter(item => item.type === 'sauce'), [ingredients]);
  const fillings = useMemo(() => ingredients.filter(item => item.type === 'main'), [ingredients]);

  function onModalClose() {
    setSelectedIngredient(null);
  }

  return (
    <>
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
        <div className={`${styles.scrollable} custom-scroll`}>
          <IngredientGroup title="Булки" items={buns} onIngredientClick={setSelectedIngredient} />
          <IngredientGroup title="Соусы" items={sauces} onIngredientClick={setSelectedIngredient} />
          <IngredientGroup title="Начинки" items={fillings} onIngredientClick={setSelectedIngredient} />
        </div>
      </section>
      {selectedIngredient && (
        <IngredientDetails ingredient={selectedIngredient} onClose={onModalClose} />
      )}
    </>
  )}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType).isRequired,
}

export default BurgerIngredients;