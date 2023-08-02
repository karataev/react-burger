import {JSX, useEffect, useState} from "react";
import {useDispatch, useSelector} from "../../hooks/hooks";
import {wsFeedConnect, wsFeedDisconnect} from "../../services/actions/feed";
import FeedOrder from "./feed-order/feed-order";
import {TOrder} from "../../utils/types";
import styles from './feed.module.css';
import FeedSummary from "./feed-summary/feed-summary";
import FeedOrderModal from "./feed-order-modal/feed-order-modal";

function Feed(): JSX.Element {
  const dispatch = useDispatch();
  const {orders} = useSelector(store => store.feed);
  const [selectedOrder, setSelectedOrder] = useState<TOrder | null>(null);

  useEffect(() => {
    dispatch(wsFeedConnect('wss://norma.nomoreparties.space/orders/all'));

    return function() {
      dispatch(wsFeedDisconnect());
    }
  }, [dispatch]);

  function onSelect(order: TOrder) {
    setSelectedOrder(order);
  }

  function onClose() {
    setSelectedOrder(null);
  }

  return (
    <div className={styles.root}>
      <div className={`${styles.column} ${styles.left} custom-scroll`}>
        {orders.map((order: TOrder) => (
          <FeedOrder order={order} key={order._id} onSelect={onSelect} />
        ))}
      </div>
      <div className={styles.column}>
        <FeedSummary />
      </div>
      {selectedOrder && <FeedOrderModal order={selectedOrder} onClose={onClose} />}
    </div>
  )
}

export default Feed;
