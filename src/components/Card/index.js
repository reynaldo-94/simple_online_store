import { useEffect, useState } from 'react'
import { priceFormat } from '../../helpers/priceFormat'
import useModal from '../../hooks/useModal'
import Button from '../Button'
import Preview from '../Preview'
import YesNoModal from '../YesNoModal'
import styles from './style.module.scss'

export default function Card({
  data,
  onAdd = () => { },
  onDelete = () => { },
  addedProducts = []
}) {

  const [isOpenPortal, openModalPortal, closeModalPortal, dataPortal] = useModal(false)
  const [isOpenAddConfirmation, openModalAddConfirmation, closeModalAddConfirmation] = useModal(false)
  const [isOpenDeleteConfirmation, openModalDeleteConfirmation, closeModalDeleteConfirmation] = useModal(false)
  const [isAdded, setIsAdded] = useState(false)

  const { name, url } = data

  const id = url.substr(-3, 2)
  const price = data.name.charCodeAt(0)

  const handleAdd = () => {
    onAdd(id, name, price)
    setIsAdded(true)
    closeModalAddConfirmation()
    closeModalPortal()
  }

  const handleDelete = () => {
    onDelete(id)
    setIsAdded(false)
    closeModalDeleteConfirmation()
    closeModalPortal()
  }

  useEffect(() => {
    const foundProduct = addedProducts.find((product) => product.id === id)
    foundProduct ? setIsAdded(true) : setIsAdded(false)
  }, [addedProducts, id])

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__image}></div>
        <div className={styles.card__body}>
          <div className={styles.card__title}>{name}</div>
          <div className={styles.card__description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </div>
          <div className={styles.card__price}>{priceFormat(price)}</div>
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
      <Preview
        title={dataPortal?.name}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        extraInformation='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        price={price}
        onAdd={handleAdd}
        onDelete={handleDelete}
        isOpenPortal={isOpenPortal}
        closeModalPortal={closeModalPortal}
        isAdded={isAdded}
      />
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
        onSuccess={handleAdd}
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
        onSuccess={handleDelete}
        onClose={closeModalDeleteConfirmation}
      />
    </>
  )
}
