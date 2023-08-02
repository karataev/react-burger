import {TOrder} from "../../../utils/types";
import {useSelector} from "../../../hooks/hooks";
import styles from './feed-summary.module.css';
import OrderNumbersList from "../order-numbers-list/order-numbers-list";

const STATUS_DONE = 'done';

function FeedSummary() {
  const {orders, ordersToday, ordersTotal} = useSelector(store => store.feed);
  const ordersDone = orders.filter((order: TOrder) => order.status === STATUS_DONE);
  const ordersInProgress = orders.filter((order: TOrder) => order.status !== STATUS_DONE);

  return (
    <>
      <div className={styles.columns}>
        <div className={styles.column}>
          <div className="text text_type_main-medium mb-6">Готовы:</div>
          <div className={styles.ready}>
            <OrderNumbersList orders={ordersDone} />
          </div>
        </div>
        <div className={styles.column}>
          <div className="text text_type_main-medium mb-6">В работе:</div>
          <OrderNumbersList orders={ordersInProgress} />
        </div>
      </div>
      <div className="text text_type_main-medium">Выполнено за все время:</div>
      <div className="text text_type_digits-large">
        <span className={styles.glow}>{ordersTotal}</span>
      </div>
      <div className="text text_type_main-medium mt-15">Выполнено за сегодня:</div>
      <div className="text text_type_digits-large">
        <span className={styles.glow}>{ordersToday}</span>
      </div>
    </>
  )
}

export default FeedSummary;