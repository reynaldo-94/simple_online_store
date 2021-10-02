import React from 'react'
import styles from './style.module.scss'

export default function Button ({
  children,
  onClick
}) {
  return (
    <button 
      // className={`${styles.btn} ${checkButtonStyle} ${checkButtonSize}`} 
      className={`${styles.button} ${styles.button__primary} ${styles.button__medium}`} 
      onClick={onClick} 
    >
      {children}
    </button>
  )
}
