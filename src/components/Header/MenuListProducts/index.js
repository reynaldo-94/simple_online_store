import React from 'react'
import Button from '../../Button'

export default function MenuListProducts({ products = [] }) {
  return (
    <div style={{
      position: 'absolute',
      right: 42,
      backgroundColor: '#e6e6e6',
      top: 40,
      padding: 20
    }}>
      {products.map(({ id, name }, index) => {
        return (
          <div key={id} style={{ display: 'flex', gap: 5 }}>
            <div>{index + 1}</div>
            <div>{name}</div>
          </div>)
      })}
      <Button>Vaciar Carrito</Button>
    </div>
  )
}
