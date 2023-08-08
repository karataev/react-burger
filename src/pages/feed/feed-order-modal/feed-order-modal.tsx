import Modal from "../../../components/modal/modal";
import {TOrder} from "../../../utils/types";

import FeedOrderFull from "../feed-order-full/feed-order-full";

type TFeedOrderModal = {
  order: TOrder;
  onClose: () => void;
}

function FeedOrderModal({order, onClose}: TFeedOrderModal) {

  return (
    <Modal title={`#${order.number}`} onClose={onClose}>
      <FeedOrderFull order={order} />
    </Modal>
  )
}

export default FeedOrderModal;