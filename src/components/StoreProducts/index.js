import React from 'react'
import Header from '../Header'
import List from './List'
import styles from './style.module.scss'

export default function StoreProducts() {
  return (
    <div className={styles.container}>
      <Header />
      <List />
    </div>

  )
}
