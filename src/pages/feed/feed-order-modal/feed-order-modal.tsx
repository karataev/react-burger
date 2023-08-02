import Modal from "../../../components/modal/modal";
import {TIngredient, TOrder} from "../../../utils/types";
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import {useSelector} from "../../../hooks/hooks";
import styles from './feed-order-modal.module.css';
import {ORDER_STATUS} from "../../../utils/constants";
import FeedOrderIngredient from "../feed-order-ingredient/feed-order-ingredient";

type TFeedOrderModal = {
  order: TOrder;
  onClose: () => void;
}

function FeedOrderModal({order, onClose}: TFeedOrderModal) {
  const {ingredients} = useSelector(store => store.ingredients);
  const createdAt = new Date(order.createdAt);

  const items = order.ingredients.map(id => {
    return ingredients.find((item: TIngredient) => item._id === id);
  })
    .filter(Boolean) as TIngredient[];

  const totalPrice = items.reduce((acc: number, item: TIngredient) => {
    return acc + item.price;
  }, 0);

  return (
    <Modal title={`#${order.number}`} onClose={onClose}>
      <h3 className="text text_type_main-medium mt-10">{order.name}</h3>
      <div className="text text_type_main-small text_color_success mt-3">
        {order.status === ORDER_STATUS.DONE && 'Выполнен'}
        {order.status !== ORDER_STATUS.DONE && 'Готовится'}
      </div>
      <div className="text text_type_main-medium mt-15">Состав:</div>
      <div className={`${styles.ingredients} custom-scroll`}>
        {items.map(item => (
          <FeedOrderIngredient ingredient={item} />
        ))}
      </div>

      <div className={styles.bottom}>
        <div className="text text_type_main-default text_color_inactive">
          <FormattedDate date={createdAt} />
        </div>
        <div className={styles.price}>
          <span className="text text_type_digits-default">{totalPrice}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>

    </Modal>
  )
}

export default FeedOrderModal;