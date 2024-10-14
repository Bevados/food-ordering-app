import { ReactNode } from 'react'
import styles from './Card.module.css'

/**
 * Компонент Card.
 *
 * Оборачивает содержимое в карточку с заданным стилем.
 *
 * @param {{ children: ReactNode }} props - Пропсы компонента, содержащие дочерние элементы.
 * @returns {JSX.Element} Карточка с обернутыми дочерними элементами.
 */
const Card = ({ children }: { children: ReactNode }): JSX.Element => {
	return <div className={styles.card}>{children}</div>
}

export default Card
