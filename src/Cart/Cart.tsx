import Modal from '../UI/Modal/Modal'
import { CartProps } from './Cart.types'
import styles from './Cart.module.css'

const Cart = ({ onHideCart }: CartProps) => {
	const cartItems = (
		<ul className={styles['cart-items']}>
			{[{ id: 'm1', name: 'Sizhi', amount: 2, price: 10.99 }].map(cart => (
				<li>{cart.name}</li>
			))}
		</ul>
	)

	return (
		<Modal onHideCart={onHideCart}>
			{cartItems}
			<div className={styles.total}>
				<span>Итого</span>
				<span>49.99</span>
			</div>
			<div className={styles.actions}>
				<button className={styles['button--alt']} onClick={onHideCart}>
					Закрыть
				</button>
				<button className={styles.button}>Заказать</button>
			</div>
		</Modal>
	)
}

export default Cart
