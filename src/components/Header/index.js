import { useState } from 'react'
import { FaCartArrowDown } from 'react-icons/fa'
import Button from '../Button'
import MenuListProducts from './MenuListProducts'
import styles from './style.module.scss'

export default function Header({ products = [], onDeleteAllProducts = () => {} }) {
  const [seeProducts, setSeeProducts] = useState(false)
  return (
    <>
    <div className={styles.header}>
      <div className={styles.header__logo}>Tienda</div>
      <div className={styles.header__information}>
        <div>{products.length}</div>
        <div onClick={() => setSeeProducts(!seeProducts)}>
          <FaCartArrowDown />
        </div>        
      </div>
    </div>
    {seeProducts && <MenuListProducts products={products} onDeleteAllProducts={onDeleteAllProducts} />}
    </>
  )
}
