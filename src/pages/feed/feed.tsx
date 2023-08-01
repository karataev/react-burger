import {JSX, useEffect} from "react";
import {useDispatch, useSelector} from "../../hooks/hooks";
import {wsFeedConnect, wsFeedDisconnect} from "../../services/actions/feed";
import FeedOrder from "./feed-order/feed-order";
import {TOrder} from "../../utils/types";
import styles from './feed.module.css';
import FeedSummary from "./feed-summary/feed-summary";

function Feed(): JSX.Element {

  const dispatch = useDispatch();
  const {orders} = useSelector(store => store.feed);

  useEffect(() => {
    dispatch(wsFeedConnect('wss://norma.nomoreparties.space/orders/all'));

    return function() {
      dispatch(wsFeedDisconnect());
    }
  }, [dispatch]);

  return (
    <div className={styles.root}>
      <div className={styles.column}>
        {orders.map((order: TOrder) => (
          <FeedOrder order={order} key={order._id} />
        ))}
      </div>
      <div className={styles.column}>
        <FeedSummary />
      </div>
    </div>
  )
}

export default Feed;
