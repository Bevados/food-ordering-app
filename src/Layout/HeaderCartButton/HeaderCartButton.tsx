import { useContext, useEffect, useState } from 'react'
import CartIcon from '../../Cart/CartIcon'
import CartContext from '../../store/cart-context/cart-context'
import styles from './HeaderCartButton.module.css'
import { HeaderCartButtonProps } from './HeaderCartButton.types'

const HeaderCartButton = ({ onClick }: HeaderCartButtonProps) => {
	const [isButtonAnimated, setIsButtonAnimated] = useState<boolean>(false)
	const cartContext = useContext(CartContext)

	const classButton = `${styles.button} ${isButtonAnimated && styles.bump}`

	useEffect(() => {
		if (cartContext.items.length === 0) {
			return
		}
		setIsButtonAnimated(true)

		const timer = setTimeout(()=> {
				setIsButtonAnimated(false)
		}, 300)

		return () => clearTimeout(timer)
	}, [cartContext.items])

	const cartContextQuantity = cartContext.items.reduce((currentValue, item) => {
		return currentValue + item.amount
	}, 0)

	return (
		<button className={classButton} onClick={onClick}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Корзина</span>
			<span className={styles.badge}>{cartContextQuantity}</span>
		</button>
	)
}

export default HeaderCartButton
