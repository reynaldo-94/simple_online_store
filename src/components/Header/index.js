import { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import MenuListProducts from './MenuListProducts'
import logo from '../../assets/system/logo.jpg'
import styles from './style.module.scss'

export default function Header({ products = [], onDeleteAllProducts = () => {} }) {
  const [seeProducts, setSeeProducts] = useState(false)
  return (
    <>
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <img src={logo} alt='Logo' style={{ height: 86, width: '100%'}} />
      </div>
      <div 
        className={styles.header__information}
        onClick={() => setSeeProducts(!seeProducts)}
        
        //onMouseOver={() => setSeeProducts(true)}
        // onMouseLeave={() => setSeeProducts(false)}
      >
        <div>
          <FiShoppingCart size={'2em'} />
        </div>
        <div>Carrito ({products.length})</div>
      </div>
    </div>
    {seeProducts && <MenuListProducts products={products} onDeleteAllProducts={onDeleteAllProducts} />}
    </>
  )
}
