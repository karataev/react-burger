import {JSX, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {TOrder} from "../../utils/types";
import {fetchOrderApi} from "../../api/norma-api";
import FeedOrderFull from "../feed/feed-order-full/feed-order-full";

function ProfileOrderPage(): JSX.Element | null {
  const params = useParams();
  const number = Number(params.number);
  const [order, setOrder] = useState<TOrder | null>(null);

  useEffect(() => {
    fetchOrderApi(number)
      .then(res => {
        setOrder(res.orders[0]);
      })
  }, [number]);

  if (!order) return null;

  return (
    <>
      <h1 className="text text_type_main-large mt-10">#{order.number}</h1>
      <FeedOrderFull order={order} />
    </>
  )
}

export default ProfileOrderPage;
