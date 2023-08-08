import {JSX} from "react";
import {TIngredient, TOrder} from "../../../utils/types";
import styles from './feed-order.module.css';
import IngredientAvatar from "../ingredient-avatar/ingredient-avatar";
import {useSelector} from "../../../hooks/hooks";
import {FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import Price from "../../../components/price/price";

type TFeedOrder = {
  order: TOrder;
  onSelect: (order: TOrder) => void;
}

function FeedOrder({order, onSelect}: TFeedOrder):JSX.Element {

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
    <div className={styles.root} onClick={() => onSelect(order)}>
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
        <Price price={totalPrice} />
      </div>
    </div>
  )
}

export default FeedOrder;