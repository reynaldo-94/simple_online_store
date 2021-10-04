import { useEffect, useState } from 'react'
import Header from '../Header'
import List from './List'
import styles from './style.module.scss'

const initialURL = 'https://pokeapi.co/api/v2/pokemon?limit=0&offset=10'

export default function StoreProducts() {

  const [data, setData] = useState([])
  const [addedProduct, setAddedProduct] = useState([])

  const getData = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(({ results }) => setData(results))
  }

  useEffect(() => {
    getData(initialURL)
  }, [])

  return (
    <div className={styles.container}>
      <Header products={addedProduct} />
      <List 
        data={data} 
        onAdd={(id, name) => setAddedProduct([...addedProduct, {id, name}])}
        onDelete={(id) => setAddedProduct(addedProduct.filter((product) => product.id !== id))}
      />
    </div>

  )
}
