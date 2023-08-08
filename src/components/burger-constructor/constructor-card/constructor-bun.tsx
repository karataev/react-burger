import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './constructor-card.module.css';
import {JSX} from "react";
import {useSelector} from "../../../hooks/hooks";

type TConstructorBunProps = {
  type?: 'top' | 'bottom';
}

function ConstructorBun({type}: TConstructorBunProps): JSX.Element | null {
  const cartBun = useSelector(store => store.cart.cartBun);

  if (!cartBun) return null;

  return (
    <div className={`mb-4 ${styles.root}`}>
      <div className={styles.left} />
      <ConstructorElement
        type={type}
        text={cartBun.name}
        price={cartBun.price}
        isLocked={true}
        thumbnail={cartBun.image_mobile}
      />
    </div>
  )
}

export default ConstructorBun;