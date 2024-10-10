import { ReactNode } from 'react'

export interface ModalWindowProps {
	children: ReactNode
}

export interface BackdropProps {
	onHideCart: () => void
}

export interface ModalProps extends BackdropProps {
	children: ReactNode
	onHideCart: () => void
}
