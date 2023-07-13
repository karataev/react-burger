import {BurgerIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './loader.module.css'
import {JSX} from "react";

function Loader(): JSX.Element {
  return (
    <span className={styles.root}>
      <BurgerIcon type="primary" />
    </span>
  )
}

export default Loader;