import {TIngredient} from "../../../utils/types";
import styles from './feed-order-ingredient.module.css';
import {JSX} from "react";
import Price from "../../../components/price/price";
import IngredientAvatar from "../ingredient-avatar/ingredient-avatar";

type TFeedOrderIngredient = {
  ingredient: TIngredient;
}

function FeedOrderIngredient({ingredient}: TFeedOrderIngredient): JSX.Element {

  return (
    <div className={styles.root}>
      <IngredientAvatar ingredient={ingredient} index={0} />
      <div className="text text_type_main-default">{ingredient.name}</div>
      <div className={styles.price}>
        <span className="text text_type_digits-default">1 x </span> <Price price={ingredient.price} />
      </div>
    </div>
  )
}

export default FeedOrderIngredient;
