import Modal from "../../modal/modal";
import PropTypes from "prop-types";
import doneImg from '../../../images/done.png';
import styles from './order-details.module.css';
import {useEffect, useState} from "react";
import {createOrderApi} from "../../../api/burger-api";
import Loader from "../../loader/loader";
import {useSelector} from "react-redux";

function OrderDetails({onClose}) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [orderNumber, setOrderNumber] = useState(null);
  const cartItems = useSelector(store => store.cartItems);

  useEffect(() => {
    async function createOrder() {
      setIsLoading(true);
      setErrorMessage('');
      try {
        const ids = cartItems.map(item => item._id);
        const result = await createOrderApi(ids);
        setOrderNumber(result.order.number);
      } catch (e) {
        setErrorMessage(e?.message);
      }
      setIsLoading(false);
    }

    createOrder();
  }, [cartItems]);

  return (
    <Modal onClose={onClose}>
      <section className={`${styles.content} pt-15 pb-15`}>
        {isLoading && <Loader />}
        {!isLoading && (
          <>
            {errorMessage && <h1>{errorMessage}</h1>}
            {!errorMessage && (
              <>
                <h1 className={`text text_type_digits-large ${styles.title}`}>{orderNumber}</h1>
                <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
                <p className="mt-15">
                  <img src={doneImg} alt="OK" />
                </p>
                <p className="text text_type_main-default mt-15">Ваш заказ начали готовить</p>
                <p className="text text_type_main-default text_color_inactive mt-2">
                  Дождитесь готовности на орбитальной станции
                </p>
              </>
            )}
          </>
        )}
      </section>
    </Modal>
  )
}

OrderDetails.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default OrderDetails;