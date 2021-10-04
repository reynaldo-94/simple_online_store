import ModalPortal from "../ModalPortal";

export default function YesNoModal({
  title = '',
  question = '',
  buttons = {
    leftText: '',
    rightText: ''
  },
  isOpen = false,
  closeModal = false
}){
  return (
    <ModalPortal isOpen={isOpen} closeModal={closeModal}>
      <div>{title}</div>
      <div>{question}</div>
      <div>
        <div>{buttons.leftText}</div>
        <div>{buttons.rightText}</div>
      </div>
    </ModalPortal>
  )
}
