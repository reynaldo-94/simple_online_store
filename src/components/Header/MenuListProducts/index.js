import React from 'react'
import { priceFormat } from '../../../helpers/priceFormat'
import Button from '../../Button'

export default function MenuListProducts({
  products = [],
  onDeleteAllProducts = () => { }
}) {
  const sum = products.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  )
  return (
    <div style={{
      border: '1px solid #000',
      borderRadius: 22,
      position: 'absolute',
      right: 38,
      backgroundColor: '#fff',
      top: 69,
      padding: 13,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
      {products.length > 0 && (
        <div style={{
          borderBottom: '1px solid #000',
          display: 'flex',
          flexDirection: 'column',
          gap: 5,
          paddingBottom: 4
        }}>

          {products.map(({ id, name, price }, index) => {
            return (
              <div
                key={id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 8
                }}
              >
                <div><span style={{ fontWeight: 'bold' }}>{index + 1}) </span>{name}</div>
                <div>{priceFormat(price)}</div>
              </div>
            )
          })}
        </div>
      )}
      {products.length > 0 ? (
        <>
          <div style={{ display: 'flex', gap: 5, justifyContent: 'flex-end' }}>
            <div style={{ fontWeight: 'bold' }}>Total:</div>
            <div>{priceFormat(sum)}</div>
          </div>
          <Button onClick={onDeleteAllProducts}>Vaciar Carrito</Button>
        </>
      ) : (
        <div>No hay productos en el carrito</div>
      )}

    </div>
  )
}
