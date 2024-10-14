import { CartItemProps } from '..'
import styles from './CartItem.module.css'

/**
 * Компонент CartItem.
 *
 * Отображает отдельный элемент в корзине покупок.
 * Позволяет пользователю увеличивать или уменьшать количество данного элемента.
 *
 * @param {CartItemProps} props - Пропсы компонента, содержащие информацию о товаре в корзине.
 * @returns {JSX.Element} Элемент корзины с возможностью управления количеством.
 */
const CartItem = ({ id, price, name, amount, onRemove, onAdd }: CartItemProps) => {
	const priceCart = `$${price.toFixed(2)}`

	return (
		<li className={styles['cart-item']}>
			<div>
				<h2>{name}</h2>
				<div className={styles.summary}>
					<span className={styles.price}>{priceCart}</span>
					<span className={styles.amount}>x {amount}</span>
				</div>
			</div>
			<div className={styles.actions}>
				<button onClick={() => onRemove(id)}>−</button>
				<button onClick={() => onAdd({id, price, name, amount})}>+</button>
			</div>
		</li>
	)
}

export default CartItem
