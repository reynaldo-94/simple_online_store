import { useState } from 'react'

export default function useModal (initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue)
  const [data, setData] = useState(null)

  //const openModal = () => setIsOpen(true)

  const closeModal = () => setIsOpen(false)

  const openModal = (id) => {
    console.log('id', id)
    if (id) {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`
      const getData = (url) => {
        fetch(url)
          .then(response => response.json())
          .then((resp) => setData(resp))
      }
      getData(url)
    }
    setIsOpen(true)
  }
  
  return [isOpen, openModal, closeModal, data]
}
