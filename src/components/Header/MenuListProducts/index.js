import React from 'react'
import { priceFormat } from '../../../helpers/priceFormat'
import Button from '../../Button'

export default function MenuListProducts({ 
  products = [], 
  onDeleteAllProducts = () => {} 
}) {
  const sum = products.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  )
  return (
    <div style={{
      position: 'absolute',
      right: 42,
      backgroundColor: '#e6e6e6',
      top: 40,
      padding: 20
    }}>
      {products.map(({ id, name, price }, index) => {
        return (
          <div key={id} style={{ display: 'flex', gap: 5 }}>
            <div>{index + 1}</div>
            <div>{name}</div>
            <div>{priceFormat(price)}</div>
          </div>)
      })}
      <div style={{ display: 'flex', gap: 5 }}>
        <div>Total:</div>
        <div>{priceFormat(sum)}</div>
      </div>
      <Button onClick={onDeleteAllProducts}>Vaciar Carrito</Button>
    </div>
  )
}
