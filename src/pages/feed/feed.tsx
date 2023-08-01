import {JSX, useEffect} from "react";
import {useDispatch, useSelector} from "../../hooks/hooks";
import {wsFeedConnect, wsFeedDisconnect} from "../../services/actions/feed";
import FeedOrder from "./feed-order/feed-order";
import {TOrder} from "../../utils/types";

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
    <div>
      {orders.map((order: TOrder) => (
        <FeedOrder order={order} key={order._id} />
      ))}
    </div>
  )
}

export default Feed;
