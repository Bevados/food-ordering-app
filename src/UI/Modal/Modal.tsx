import { createPortal } from 'react-dom'
import styles from './Modal.module.css'
import { BackdropProps, ModalProps, ModalWindowProps } from '.'

/**
 * Компонент Backdrop.
 *
 * Отображает затемненный фон за модальным окном.
 * При нажатии на фон вызывает функцию onHideCart.
 *
 * @param {BackdropProps} props - Пропсы компонента, содержащие функцию для скрытия модального окна.
 * @returns {JSX.Element} Затемненный фон.
 */
const Backdrop = ({ onHideCart }: BackdropProps) => {
	return <div className={styles.backdrop} onClick={onHideCart}></div>
}

/**
 * Компонент ModalWindow.
 * Отображает содержимое модального окна.
 *
 * @param {ModalWindowProps} props - Пропсы компонента, содержащие дочерние элементы.
 * @returns {JSX.Element} Модальное окно с содержимым.
 */
const ModalWindow = ({ children }: ModalWindowProps) => {
	return <div className={styles.modal}>{children}</div>
}

/**
 * Компонент Modal.
 *
 * Объединяет Backdrop и ModalWindow для отображения модального окна.
 * Создает портал для отображения компонентов в другом месте DOM.
 *
 * @param {ModalProps} props - Пропсы компонента, содержащие функцию для скрытия модального окна и дочерние элементы.
 * @returns {JSX.Element} Портал с фоном и модальным окном.
 */
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
