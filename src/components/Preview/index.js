import React from 'react'
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
  onDelete = () => { }
}) {
  return (
    <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{extraInformation}</p>
      {!isAdded ? (
        <Button onClick={onAdd}>
          Agregar
        </Button>
      ) : (
        <Button onClick={onDelete}>
          Eliminar
        </Button>
      )}

    </ModalPortal>
  )
}
