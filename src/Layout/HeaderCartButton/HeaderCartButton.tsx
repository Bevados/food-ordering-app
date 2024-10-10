import CartIcon from '../../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'
import { HeaderCartButtonProps } from './HeaderCartButton.types'

const HeaderCartButton = ({ onClick }: HeaderCartButtonProps) => {
	return (
		<button className={styles.button} onClick={onClick}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Корзина</span>
			<span className={styles.badge}>2</span>
		</button>
	)
}

export default HeaderCartButton
