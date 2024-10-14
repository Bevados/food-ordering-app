import { ReactNode } from 'react'

/**
 * Интерфейс для пропсов компонента ModalWindow.
 *
 * @property {ReactNode} children - Дочерние элементы, которые будут отображены внутри модального окна.
 */
export interface ModalWindowProps {
	children: ReactNode
}

/**
 * Интерфейс для пропсов компонента Backdrop.
 *
 * @property {() => void} onHideCart - Функция для скрытия модального окна при нажатии на задний фон.
 */
export interface BackdropProps {
	onHideCart: () => void
}

/**
 * Интерфейс для пропсов компонента Modal.
 *
 * @extends BackdropProps
 *
 * @property {ReactNode} children - Дочерние элементы, которые будут отображены внутри модального окна.
 */
export interface ModalProps extends BackdropProps {
	children: ReactNode
	onHideCart: () => void
}