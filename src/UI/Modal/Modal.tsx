import { createPortal } from 'react-dom'
import styles from './Modal.module.css'
import { BackdropProps, ModalProps, ModalWindowProps } from './Modal.types'

const Backdrop = ({onHideCart}: BackdropProps) => {
	return <div className={styles.backdrop} onClick={onHideCart}></div>
}
const ModalWindow = ({ children }: ModalWindowProps) => {
	return <div className={styles.modal}>{children}</div>
}

const Modal = ({ children, onHideCart }: ModalProps) => {
	const portalElement = document.getElementById('overlays')

	return (
		<>
			{portalElement &&
				createPortal(<Backdrop onHideCart={onHideCart} />, portalElement)}
			{portalElement &&
				createPortal(<ModalWindow>{children}</ModalWindow>, portalElement)}
		</>
	)
}

export default Modal
