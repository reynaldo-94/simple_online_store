import styles from './style.module.scss'

export default function Button ({
  children,
  onClick,
  type = 'primary'
}) {

  return (
    <button 
      className={`${styles.button} ${styles[type]} ${styles.button__medium}`} 
      onClick={onClick} 
    >
      {children}
    </button>
  )
}
