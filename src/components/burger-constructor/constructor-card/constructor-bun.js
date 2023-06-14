import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";
import styles from './constructor-card.module.css';

function ConstructorBun({type}) {
  const cartBun = useSelector(store => store.cartBun);

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

ConstructorBun.propTypes = {
  type: PropTypes.string.isRequired,
}

export default ConstructorBun;