import React from 'react'
import Button from '../Button'
import styles from './style.module.scss'

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}></div>
      <div className={styles.card__body}>
        <div className={styles.card__title}>Producto</div>
        <div className={styles.card__description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </div>
        <div className={styles.card__price}>S/. 231.00</div>
        <div className={styles.card__footer}>
          <div>Vista previa</div>
          <Button>Agregar</Button>
        </div>
      </div>
    </div>
  )
}
