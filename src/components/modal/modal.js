import ReactDOM from "react-dom";
import styles from './modal.module.css';
import PropTypes from "prop-types";
import {useEffect} from "react";
import ModalOverlay from "./modal-overlay/modal-overlay";

function Modal({onClose, children}) {

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    }
  }, [onClose])

  const element = (
    <div className={styles.root}>
      <section className={styles.inner}>
        {children}
      </section>
      <ModalOverlay onClick={onClose} />
    </div>
  )

  return ReactDOM.createPortal(element, document.getElementById('modal-root'));
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default Modal;