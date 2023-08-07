import ProfileNav from "./profile-nav/profile-nav";
import {JSX, useEffect, useState} from "react";
import {wsFeedConnect, wsFeedDisconnect} from "../../services/actions/feed";
import {useDispatch, useSelector} from "../../hooks/hooks";
import {TOrder} from "../../utils/types";
import FeedOrder from "../feed/feed-order/feed-order";
import styles from './profile-orders-page.module.css';
import FeedOrderModal from "../feed/feed-order-modal/feed-order-modal";
import {useNavigate, useParams} from "react-router-dom";
import ProfileOrderPage from "../profile-order/profile-order-page";
import {ROUTES} from "../../utils/constants";

function ProfileOrdersPage(): JSX.Element {
  const dispatch = useDispatch();
  const {orders} = useSelector(store => store.feed);
  const reversedOrders = [...orders].reverse();
  const [selectedOrder, setSelectedOrder] = useState<TOrder | null>(null);
  const navigate = useNavigate();
  const params = useParams();
  const orderNumber = Number(params.number);

  useEffect(() => {
    dispatch(wsFeedConnect({url: 'wss://norma.nomoreparties.space/orders', useToken: true}));

    return function() {
      dispatch(wsFeedDisconnect());
    }
  }, [dispatch]);

  function onSelect(order: TOrder) {
    setSelectedOrder(order);
    navigate(`/profile/orders/${order.number}`);
  }

  function onClose() {
    setSelectedOrder(null);
    navigate(ROUTES.PROFILE_ORDERS);
  }

  if (orderNumber && !selectedOrder) {
    return <ProfileOrderPage />
  }

  return (
    <div className={styles.root}>
      <ProfileNav />
      <div className={`${styles.scroll} custom-scroll`}>
        {reversedOrders.map((order: TOrder) => (
          <FeedOrder order={order} key={order._id} onSelect={onSelect} />
        ))}
      </div>
      {selectedOrder && <FeedOrderModal order={selectedOrder} onClose={onClose} />}
    </div>
  )
}

export default ProfileOrdersPage;