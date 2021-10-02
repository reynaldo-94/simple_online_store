import ReactDOM from 'react-dom'
import styles from './style.module.scss'

export default function ModalPortal({ children, isOpen, closeModal }) {
  const handleModalContainerClick = (e) => e.stopPropagation()
  return ReactDOM.createPortal(
    <article className={`${styles.modal} ${isOpen && styles.modal__isOpen}`} onClick={closeModal}>
      <div className={styles.modal__container} onClick={handleModalContainerClick}>
        <button className={styles.modal__close} onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>,
    document.getElementById("modal")
  )
}
