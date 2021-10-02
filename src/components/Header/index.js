import React from 'react'
import styles from './style.module.scss'
import { FaCartArrowDown } from 'react-icons/fa'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>Tienda</div>
      <div className={styles.header__information}>
        <div>3</div>
        <FaCartArrowDown />
      </div>
    </div>
  )
}
