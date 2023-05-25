import Modal from "../modal/modal";
import PropTypes from "prop-types";
import doneImg from '../../images/done.png';
import styles from './order-details.module.css';
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function OrderDetails({onClose}) {
  return (
    <Modal onClose={onClose} title="hello">
      <div className={styles.close_wrap}>
        <CloseIcon type="primary" onClick={onClose} />
      </div>
      <section className={`${styles.content} pt-30 pb-30`}>
        <h1 className={`text text_type_digits-large ${styles.title}`}>034536</h1>
        <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
        <p className="mt-15">
          <img src={doneImg} alt="OK" />
        </p>
        <p className="text text_type_main-default mt-15">Ваш заказ начали готовить</p>
        <p className="text text_type_main-default text_color_inactive mt-2">
          Дождитесь готовности на орбитальной станции
        </p>
      </section>
    </Modal>
  )
}

OrderDetails.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default OrderDetails;