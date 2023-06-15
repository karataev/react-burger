import {useCallback, useMemo, useRef} from 'react';
import styles from './burger-ingredients.module.css';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientGroup from "./ingredient-group/ingredient-group";
import IngredientDetails from "./ingredient-details/ingredient-details";
import {useDispatch, useSelector} from "react-redux";
import {GROUP_BUNS, GROUP_FILLINGS, GROUP_SAUCES} from "../../utils/constants";
import debounce from 'lodash.debounce';

import {SET_CURRENT_TAB} from "../../services/actions/ingredients";

function BurgerIngredients() {
  const {ingredients, currentTab} = useSelector(store => store.ingredients);

  const buns = useMemo(() => ingredients.filter(item => item.type === 'bun'), [ingredients]);
  const sauces = useMemo(() => ingredients.filter(item => item.type === 'sauce'), [ingredients]);
  const fillings = useMemo(() => ingredients.filter(item => item.type === 'main'), [ingredients]);

  const dispatch = useDispatch();

  const rootRef = useRef();
  const bunsRef = useRef();
  const saucesRef = useRef();
  const fillingsRef = useRef();

  function setCurrentTab(tab) {
    dispatch({type: SET_CURRENT_TAB, tab});
  }

  function getDist(ref) {
    const rootTop = rootRef.current.getBoundingClientRect().top;
    const refTop = ref.current.getBoundingClientRect().top;
    return Math.abs(rootTop - refTop);
  }

  const onScroll = useCallback(() => {
    let minDist = 100000;
    let closestTab = '';
    const items = [
      {tab: GROUP_BUNS, dist: getDist(bunsRef)},
      {tab: GROUP_SAUCES, dist: getDist(saucesRef)},
      {tab: GROUP_FILLINGS, dist: getDist(fillingsRef)},
    ]
    items.forEach(item => {
      if (item.dist < minDist) {
        minDist = item.dist;
        closestTab = item.tab;
      }
    })
    if (currentTab !== closestTab) {
      dispatch({type: SET_CURRENT_TAB, tab: closestTab});
    }
  }, [currentTab, dispatch]);

  const debouncedScroll = useMemo(() => debounce(onScroll, 50), [onScroll]);

  return (
    <>
      <section className={`pt-10 ${styles.root}`} ref={rootRef}>
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
        <div className={`${styles.scrollable} custom-scroll`} onScroll={debouncedScroll}>
          <IngredientGroup type={GROUP_BUNS} items={buns} groupRef={bunsRef} />
          <IngredientGroup type={GROUP_SAUCES} items={sauces} groupRef={saucesRef} />
          <IngredientGroup type={GROUP_FILLINGS} items={fillings} groupRef={fillingsRef} />
        </div>
      </section>
      <IngredientDetails />
    </>
  )}


export default BurgerIngredients;