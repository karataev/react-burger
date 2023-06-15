import {useMemo} from 'react';
import styles from './burger-ingredients.module.css';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientGroup from "./ingredient-group/ingredient-group";
import IngredientDetails from "./ingredient-details/ingredient-details";
import {useDispatch, useSelector} from "react-redux";
import {GROUP_BUNS, GROUP_FILLINGS, GROUP_SAUCES} from "../../utils/constants";

import {SET_CURRENT_TAB} from "../../store/actions/ingredients";

function BurgerIngredients() {
  const {ingredients, currentTab} = useSelector(store => store.ingredients);

  const buns = useMemo(() => ingredients.filter(item => item.type === 'bun'), [ingredients]);
  const sauces = useMemo(() => ingredients.filter(item => item.type === 'sauce'), [ingredients]);
  const fillings = useMemo(() => ingredients.filter(item => item.type === 'main'), [ingredients]);

  const dispatch = useDispatch();

  function setCurrentTab(tab) {
    dispatch({type: SET_CURRENT_TAB, tab});
  }

  return (
    <>
      <section className={`pt-10 ${styles.root}`}>
        <h1 className="text text_type_main-large">Соберите бургер</h1>
        <div className={`mt-5 ${styles.tabs}`}>
          <Tab active={currentTab === GROUP_BUNS} value={GROUP_BUNS} className={styles.tab} onClick={setCurrentTab}>
            Булки
          </Tab>
          <Tab active={currentTab === GROUP_SAUCES} value={GROUP_SAUCES} onClick={setCurrentTab}>
            Соусы
          </Tab>
          <Tab active={currentTab === GROUP_FILLINGS} value={GROUP_FILLINGS} onClick={setCurrentTab}>
            Начинки
          </Tab>
        </div>
        <div className={`${styles.scrollable} custom-scroll`}>
          <IngredientGroup type={GROUP_BUNS} items={buns} />
          <IngredientGroup type={GROUP_SAUCES} items={sauces} />
          <IngredientGroup type={GROUP_FILLINGS} items={fillings} />
        </div>
      </section>
      <IngredientDetails />
    </>
  )}


export default BurgerIngredients;