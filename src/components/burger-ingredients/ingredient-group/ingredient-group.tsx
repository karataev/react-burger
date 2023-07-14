import styles from "./ingredient-group.module.css";
import {TIngredient} from "../../../utils/types";
import IngredientCard from "../ingredient-card/ingredient-card";
import {LegacyRef, useMemo} from "react";
import {GROUP_BUNS, GROUP_SAUCES} from "../../../utils/constants";

type TIngredientGroupProps = {
  type: string;
  items: TIngredient[];
  groupRef?: LegacyRef<HTMLHeadingElement>;
}

function IngredientGroup({items, type, groupRef}: TIngredientGroupProps): JSX.Element {
  const title = useMemo(() => {
    if (type === GROUP_BUNS) return 'Булки';
    if (type === GROUP_SAUCES) return 'Соусы';
    return 'Начинки';
  }, [type])

  return (
    <>
      <h2 ref={groupRef} className="text text_type_main-medium pt-10">{title}</h2>
      <ul className={styles.cards}>
        {items.map(item => {
          return (
            <li key={item._id} className={styles.li}>
              <IngredientCard item={item} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default IngredientGroup;