import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {useSelector} from "react-redux";
import styles from './constructor-card.module.css';
import {JSX} from "react";

type TConstructorBunProps = {
  type?: 'top' | 'bottom';
}

function ConstructorBun({type}: TConstructorBunProps): JSX.Element | null {
  // @ts-ignore
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