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
  onSuccess = () => { },
  onClose = () => { }
}) {
  return (
    <ModalPortal isOpen={isOpen} closeModal={closeModal}>
      {/* <div>{title}</div> */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ fontWeight: 'bold' }}>{question}</div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={onClose}>
            {buttons.leftText}
          </Button>
          <Button onClick={onSuccess}>
            {buttons.rightText}
          </Button>
        </div>
      </div>
    </ModalPortal>
  )
}
