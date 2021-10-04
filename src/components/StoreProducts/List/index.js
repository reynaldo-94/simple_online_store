import React from 'react'
import Card from '../../Card'
import styles from './style.module.scss'

export default function List({ data }) {
  return (
    <div className={styles.list}>
      { data.map((el, index) => {
        return (
          <Card key={index} data={el}  />
        )
      }) }      
    </div>
  )
}
