import Modal from "../../modal/modal";
import PropTypes from "prop-types";
import doneImg from '../../../images/done.png';
import styles from './order-details.module.css';

function OrderDetails({onClose, orderNumber}) {
  return (
    <Modal onClose={onClose}>
      <section className={`${styles.content} pt-15 pb-15`}>
        <h1 className={`text text_type_digits-large ${styles.title}`}>{orderNumber}</h1>
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
  orderNumber: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default OrderDetails;