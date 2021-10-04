import React, { useState } from 'react'
import useModal from '../../hooks/useModal'
import Button from '../Button'
import ModalPortal from '../ModalPortal'
import YesNoModal from '../YesNoModal'
import styles from './style.module.scss'

export default function Card({ 
  data, 
  onAdd = () => {},
  onDelete = () => {} 
}) {

  const [isOpenPortal, openModalPortal, closeModalPortal, dataPortal] = useModal(false)
  const [isOpenAddConfirmation, openModalAddConfirmation, closeModalAddConfirmation] = useModal(false)
  const [isOpenDeleteConfirmation, openModalDeleteConfirmation, closeModalDeleteConfirmation] = useModal(false)
  const [isAdded, setIsAdded] = useState(false)

  const { name, url } = data

  const id = url.substr(-3, 2)

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__image}></div>
        <div className={styles.card__body}>
          <div className={styles.card__title}>{name}</div>
          <div className={styles.card__description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </div>
          <div className={styles.card__price}>S/. 231.00</div>
          <div className={styles.card__footer}>
            <div onClick={() => openModalPortal(id)}>Vista previa</div>
            {!isAdded ? (
              <Button onClick={openModalAddConfirmation}>Agregar</Button>
            ) : (
              <Button onClick={openModalDeleteConfirmation}>Eliminar</Button>
            )
            }

          </div>
        </div>
      </div>
      <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
        <h3>{dataPortal?.name}</h3>
        <p>Este es el contenido de un modal que carga en otro nodo del DOM diferente donde carga nuestro app de React, gracias a un React Portal</p>
      </ModalPortal>
      <YesNoModal
        title=''
        question='¿Estás seguro de agregar este producto'
        buttons={
          {
            leftText: 'No',
            rightText: 'Si, Agregar'
          }
        }
        isOpen={isOpenAddConfirmation}
        closeModal={closeModalAddConfirmation}
        onSuccess={() => {
          onAdd(id, name)
          setIsAdded(true)
          closeModalAddConfirmation()
        }}
        onClose={closeModalAddConfirmation}
      />
      <YesNoModal
        title=''
        question='¿Estás seguro de eliminar este producto'
        buttons={
          {
            leftText: 'No',
            rightText: 'Si, eliminar'
          }
        }
        isOpen={isOpenDeleteConfirmation}
        closeModal={closeModalDeleteConfirmation}
        onSuccess={() => {
          onDelete(id)
          setIsAdded(false)
          closeModalDeleteConfirmation()
        }}
        onClose={closeModalDeleteConfirmation}
      />
    </>
  )
}
