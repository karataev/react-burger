import {TOrder} from "../../../utils/types";
import styles from './order-numbers-list.module.css';

type TOrderNumbersList = {
  orders: TOrder[];
}

const MAX_CHUNK_SIZE = 10;

function OrderNumbersList({orders}: TOrderNumbersList) {

  const chunks = orders.length < MAX_CHUNK_SIZE
    ? [orders]
    : [
      orders.slice(0, MAX_CHUNK_SIZE),
      orders.slice(10),
    ]

  return (
    <div className={styles.root}>
      {chunks.map((chunk, index) => (
        <div key={index}>
          {chunk.map((order: TOrder) => (
            <div className="text text_type_digits-default mb-2" key={order._id}>
              {order.number}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default OrderNumbersList;