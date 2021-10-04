// import Header from "./components/Header";
// import Card from "./components/Card";
import { useEffect } from 'react'
import ModalPortal from "./components/ModalPortal";
import StoreProducts from "./components/StoreProducts";
import useModal from "./hooks/useModal";

export default function App() {

  const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false)

  return (
    // <Header />
    // <Card />
    <StoreProducts />
    // <>
    //   <button onClick={openModalPortal}>Modal en Portal</button>
    //   <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
    //     <h3>Modal en Portal</h3>
    //     <p>Este es el contenido de un modal que carga en otro nodo del DOM diferente donde carga nuestro app de React, gracias a un React Portal</p>
    //   </ModalPortal>
    // </>
  );
}
