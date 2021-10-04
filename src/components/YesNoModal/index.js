import Button from "../Button";
import ModalPortal from "../ModalPortal";

export default function YesNoModal({
  title = '',
  question = '',
  buttons = {
    leftText: '',
    rightText: ''
  },
  isOpen = false,
  closeModal = false,
  onSuccess = () => {},
  onClose = () => {}
}){
  return (
    <ModalPortal isOpen={isOpen} closeModal={closeModal}>
      <div>{title}</div>
      <div>{question}</div>
      <div>
        <Button onClick={onClose}>
          {buttons.leftText}
        </Button>
        <Button onClick={onSuccess}>
          {buttons.rightText}
        </Button>
      </div>
    </ModalPortal>
  )
}
