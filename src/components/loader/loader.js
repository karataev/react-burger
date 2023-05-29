import {BurgerIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './loader.module.css'

function Loader() {
  return (
    <span className={styles.root}>
      <BurgerIcon type="primary" />
    </span>
  )
}

export default Loader;