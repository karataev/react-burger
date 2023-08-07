import {JSX, useEffect, useState} from "react";
import {useDispatch, useSelector} from "../../hooks/hooks";
import {wsFeedConnect, wsFeedDisconnect} from "../../services/actions/feed";
import FeedOrder from "./feed-order/feed-order";
import {TOrder} from "../../utils/types";
import styles from './feed.module.css';
import FeedSummary from "./feed-summary/feed-summary";
import FeedOrderModal from "./feed-order-modal/feed-order-modal";
import {useNavigate, useParams} from "react-router-dom";
import FeedOrderPage from "../feed-order/feed-order-page";
import {ROUTES} from "../../utils/constants";

function FeedPage(): JSX.Element {
  const dispatch = useDispatch();
  const {orders} = useSelector(store => store.feed);
  const [selectedOrder, setSelectedOrder] = useState<TOrder | null>(null);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    dispatch(wsFeedConnect({url: 'wss://norma.nomoreparties.space/orders/all'}));

    return function() {
      dispatch(wsFeedDisconnect());
    }
  }, [dispatch]);

  if (params.number && !selectedOrder) {
    return <FeedOrderPage />
  }

  function onSelect(order: TOrder) {
    setSelectedOrder(order);
    navigate(`/feed/${order.number}`);
  }

  function onClose() {
    setSelectedOrder(null);
    navigate(ROUTES.FEED);
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

export default FeedPage;
