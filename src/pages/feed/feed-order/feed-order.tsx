import {JSX} from "react";
import {TIngredient, TOrder} from "../../../utils/types";
import styles from './feed-order.module.css';
import IngredientAvatar from "../ingredient-avatar/ingredient-avatar";
import {useSelector} from "../../../hooks/hooks";
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";

type TFeedOrder = {
  order: TOrder;
}

function FeedOrder({order}: TFeedOrder):JSX.Element {

  const {ingredients} = useSelector(store => store.ingredients);

  const items = order.ingredients.map(id => {
    return ingredients.find((item: TIngredient) => item._id === id);
  })
    .filter(Boolean) as TIngredient[];

  const totalPrice = items.reduce((acc: number, item: TIngredient) => {
    return acc + item.price;
  }, 0);

  const createdAt = new Date(order.createdAt);

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <div className="text text_type_digits-default">#{order.number}</div>
        <div className="text text_type_main-default text_color_inactive">
          <FormattedDate date={createdAt} />
        </div>
      </div>
      <h3 className="text text_type_main-medium">{order.name}</h3>
      <div className={styles.bottom}>
        <div className={styles.images}>{items.map((item, index) => (
          <IngredientAvatar ingredient={item} key={index} index={index} />
        ))}</div>
        <div className={styles.price}>
          <span className="text text_type_digits-default">{totalPrice}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  )
}

export default FeedOrder;