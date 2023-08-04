import {TIngredient, TIngredientWithQuantity, TOrder} from "../../../utils/types";
import {JSX} from "react";
import {useSelector} from "../../../hooks/hooks";
import {ORDER_STATUS} from "../../../utils/constants";
import styles from "../feed-order-modal/feed-order-modal.module.css";
import FeedOrderIngredient from "../feed-order-ingredient/feed-order-ingredient";
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";

type TFeedOrderFull = {
  order: TOrder;
}

type TTable = {
  [key: string]: number;
}

function FeedOrderFull({order}: TFeedOrderFull): JSX.Element {
  const {ingredients} = useSelector(store => store.ingredients);
  const createdAt = new Date(order.createdAt);

  const table: TTable = {};
  order.ingredients.forEach((ingredientId: string) => {
    table[ingredientId] = table[ingredientId] ? table[ingredientId] + 1 : 1;
  });

  const ingredientGroups = Object.entries(table).map(([key, value]) => {
    const ingredient = ingredients.find((item: TIngredient) => item._id === key);
    if (!ingredient) return null;
    return {
      ...ingredient,
      quantity: value,
    }
  })
    .filter(Boolean) as TIngredientWithQuantity[];

  const items = order.ingredients.map(id => {
    return ingredients.find((item: TIngredient) => item._id === id);
  })
    .filter(Boolean) as TIngredient[];

  const totalPrice = items.reduce((acc: number, item: TIngredient) => {
    return acc + item.price;
  }, 0);

  return (
    <>
      <h3 className="text text_type_main-medium mt-10">{order.name}</h3>
      <div className="text text_type_main-small text_color_success mt-3">
        {order.status === ORDER_STATUS.DONE ? 'Выполнен' : 'Готовится'}
      </div>
      <div className="text text_type_main-medium mt-15">Состав:</div>
      <div className={`${styles.ingredients} custom-scroll`}>
        {ingredientGroups.map((item: TIngredientWithQuantity) => (
          <FeedOrderIngredient ingredient={item} key={item._id} />
        ))}
      </div>

      <div className={styles.bottom}>
        <div className="text text_type_main-default text_color_inactive">
          <FormattedDate date={createdAt} />
        </div>
        <div className={styles.price}>
          <span className="text text_type_digits-default">{totalPrice}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>

    </>
  )
}

export default FeedOrderFull;