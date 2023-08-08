import {JSX} from "react";
import styles from './price.module.css'
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

type TPrice = {
  price: number;
}

function Price({price}: TPrice): JSX.Element {

  return (
    <div className={styles.price}>
      <span className="text text_type_digits-default">{price}</span>
      <CurrencyIcon type="primary" />
    </div>
  )
}

export default Price;