import {TOrder} from "../../../utils/types";
import {useSelector} from "../../../hooks/hooks";
import styles from './feed-summary.module.css';

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
            {ordersDone.map((order: TOrder) => (
              <div className="text text_type_digits-default mb-2" key={order._id}>{order.number}</div>
            ))}
          </div>
        </div>
        <div className={styles.column}>
          <div className="text text_type_main-medium mb-6">В работе:</div>
          <div>
            {ordersInProgress.map((order: TOrder) => (
              <div className="text text_type_digits-default mb-2" key={order._id}>{order.number}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="text text_type_main-medium">Выполнено за все время:</div>
      <div className="text text_type_digits-large">{ordersTotal}</div>
      <div className="text text_type_main-medium mt-15">Выполнено за сегодня:</div>
      <div className="text text_type_digits-large">{ordersToday}</div>
    </>
  )
}

export default FeedSummary;