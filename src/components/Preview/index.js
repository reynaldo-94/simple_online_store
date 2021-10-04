import React from 'react'
import { priceFormat } from '../../helpers/priceFormat'
import Button from '../Button'
import ModalPortal from '../ModalPortal'

export default function Preview({
  isOpenPortal = false,
  closeModalPortal = false,
  title = '',
  description = '',
  extraInformation = '',
  isAdded = false,
  onAdd = () => { },
  onDelete = () => { },
  price = 0
}) {
  return (
    <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ height: 100, backgroundColor: 'gray' }}></div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 13, flex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>{title}</div>
              <p>{description}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ fontWeight: 'bold' }}>Información extra</div>
              <p>{extraInformation}</p>
            </div>
          </div>
          <span style={{ fontWeight: 'bold' }}>{priceFormat(price)}</span>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
      {
        !isAdded ? (
          <Button onClick={onAdd}>
            Agregar
          </Button>
        ) : (
          <Button onClick={onDelete} type='danger'>
            Eliminar
          </Button>
        )
      }
      </div>
    </ModalPortal>
  )
}
