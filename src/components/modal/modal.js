import ReactDOM from "react-dom";
import styles from './modal.module.css';
import PropTypes from "prop-types";
import {useEffect} from "react";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function Modal({title, onClose, children}) {

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
        <header className={styles.header}>
          <h1 className="text text_type_main-large">{title}</h1>
          <button className={styles.close_bt} onClick={onClose}>
            <CloseIcon type="primary" />
          </button>
        </header>
        {children}
      </section>
    </div>
  )

  return ReactDOM.createPortal(element, document.getElementById('modal-root'));
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Modal;