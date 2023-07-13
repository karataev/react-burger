import Modal from "../../modal/modal";
import doneImg from '../../../images/done.png';
import styles from './order-details.module.css';
import {JSX, useEffect} from "react";
import Loader from "../../loader/loader";
import {useDispatch, useSelector} from "react-redux";
import {createOrder} from "../../../services/actions/order";
import {TIngredient} from "../../../utils/types";

type TOrderDetails = {
  onClose: () => void;
}

function OrderDetails({onClose}: TOrderDetails): JSX.Element {
  const dispatch = useDispatch();
  // @ts-ignore
  const {cartItems, cartBun} = useSelector(store => store.cart);
  // @ts-ignore
  const {isLoading, errorMessage, orderNumber} = useSelector(store => store.order);

  useEffect(() => {
    const itemIds = cartItems.map((item: TIngredient) => item._id);
    const ids = [cartBun._id, ...itemIds, cartBun._id];
    // @ts-ignore
    dispatch(createOrder(ids));
  }, [dispatch, cartItems, cartBun]);

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

export default OrderDetails;