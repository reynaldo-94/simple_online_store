import { useEffect, useState } from 'react'
import Header from '../Header'
import List from './List'
import styles from './style.module.scss'

const initialURL = 'https://pokeapi.co/api/v2/pokemon?limit=0&offset=10'

export default function StoreProducts() {

  const [data, setData] = useState([])

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
      <Header />
      <List data={data}/>
    </div>

  )
}
