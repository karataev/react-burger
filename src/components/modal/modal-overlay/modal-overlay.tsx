import styles from './modal-overlay.module.css';
import {JSX} from "react";

type TModalOverlayProps = {
  onClick: () => void;
}

function ModalOverlay({onClick}: TModalOverlayProps): JSX.Element {

  return (
    <div className={styles.root} onClick={onClick} data-test="modal-overlay"></div>
  )
}

export default ModalOverlay;