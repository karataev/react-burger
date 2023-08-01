import {JSX} from "react";
import {TIngredient} from "../../../utils/types";
import styles from './ingredient-avatar.module.css';

type TIngredientAvatar = {
  ingredient: TIngredient;
  index: number;
}

function IngredientAvatar({ingredient, index}: TIngredientAvatar): JSX.Element | null {

  const containerStyle = {
    transform: `translateX(${-index * 20}px)`,
    zIndex: 100 - index,
  }

  const imgStyle = {
    backgroundImage: `url(${ingredient.image_mobile})`,
  }

  return (
    <div className={styles.root} style={containerStyle}>
      <div
        style={imgStyle}
        className={styles.img}
      ></div>
    </div>
  )
}

export default IngredientAvatar;