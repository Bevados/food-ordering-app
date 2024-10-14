import { useContext, useEffect, useState } from 'react'
import CartIcon from '../../Cart/CartIcon'
import CartContext from '../../store/cart-context/cart-context'
import styles from './HeaderCartButton.module.css'
import { HeaderCartButtonProps } from '.'


/**
 * Компонент HeaderCartButton.
 *
 * Отображает кнопку корзины с количеством товаров и анимацией при добавлении товара.
 *
 * @param {HeaderCartButtonProps} props - Пропсы компонента, включая функция открытия корзины для обработки клика, .
 * @returns {JSX.Element} Кнопка корзины с иконкой, текстом и счетчиком товаров.
 */
const HeaderCartButton = ({ onClick }: HeaderCartButtonProps): JSX.Element => {
	const [isButtonAnimated, setIsButtonAnimated] = useState<boolean>(false)
	const cartContext = useContext(CartContext)

	const classButton = `${styles.button} ${isButtonAnimated && styles.bump}`

	/**
	 * Эффект, который запускает анимацию кнопки, если в корзину добавляется товар.
	 */
	useEffect(() => {
		if (cartContext.items.length === 0) {
			return
		}
		setIsButtonAnimated(true)

		const timer = setTimeout(() => {
			setIsButtonAnimated(false)
		}, 300)

		return () => clearTimeout(timer)
	}, [cartContext.items])

	/**
	 * Количество товаров в корзине, рассчитанное из контекста корзины.
	 */
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
