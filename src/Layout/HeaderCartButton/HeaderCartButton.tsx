import { useContext } from 'react'
import CartIcon from '../../Cart/CartIcon'
import CartContext from '../../store/cart-context/cart-context'
import styles from './HeaderCartButton.module.css'
import { HeaderCartButtonProps } from './HeaderCartButton.types'

const HeaderCartButton = ({ onClick }: HeaderCartButtonProps) => {
	const cartContext = useContext(CartContext)

	const cartContextQuantity = cartContext.items.reduce((currentValue, item) => {
		return currentValue + item.amount
	}, 0)

	return (
		<button className={styles.button} onClick={onClick}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Корзина</span>
			<span className={styles.badge}>{cartContextQuantity}</span>
		</button>
	)
}

export default HeaderCartButton
