import React, {JSX, useMemo} from 'react';
import styles from './ingredient-card.module.css';
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {TIngredient} from "../../../utils/types";
import {SET_SELECTED_INGREDIENT} from "../../../services/actions/ingredients";
import {useDrag} from "react-dnd";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "../../../hooks/hooks";

type TIngredientCardProps = {
  item: TIngredient;
}

function IngredientCard({item}: TIngredientCardProps): JSX.Element {
  const navigate = useNavigate();
  const {name, price, image} = item;

  const dispatch = useDispatch();
  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: {ingredient: item},
  });

  const {cartItems, cartBun} = useSelector(store => store.cart);
  const itemsCount = useMemo(() => {
    if (item.type === 'bun') return cartBun?._id === item._id ? 2 : 0;
    return cartItems.filter((cartItem: TIngredient) => cartItem._id === item._id).length;
  }, [item, cartItems, cartBun]);

  function handleClick() {
    dispatch({type: SET_SELECTED_INGREDIENT, selectedIngredient: item});
    sessionStorage.setItem('use-ingredient-popup', 'true');
    navigate(`/ingredients/${item._id}`);
  }

  return (
    <div className={`mt-6 ${styles.root}`} onClick={handleClick} data-test={item.name}>
      {itemsCount > 0 && <Counter count={itemsCount} size="default" />}
      <div ref={dragRef}>
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

export default React.memo(IngredientCard);