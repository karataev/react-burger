import ReactDOM from "react-dom";
import styles from './modal.module.css';
import {JSX, ReactNode, useEffect} from "react";
import ModalOverlay from "./modal-overlay/modal-overlay";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

type TModalProps = {
  title?: string;
  onClose: () => void;
  children: ReactNode;
}

function Modal({onClose, children, title = ''}: TModalProps): JSX.Element {

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
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
          <span data-test="close-icon"><CloseIcon type="primary" onClick={onClose} /></span>
        </header>
        {children}
      </section>
      <ModalOverlay onClick={onClose} />
    </div>
  )

  const targetEl: HTMLElement = document.getElementById('modal-root') as HTMLElement;
  return ReactDOM.createPortal(element, targetEl);
}

export default Modal;