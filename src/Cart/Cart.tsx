import { useContext } from 'react'
import Modal from '../UI/Modal/Modal'
import CartContext from '../store/cart-context/cart-context'
import { CartProps, Item } from './Cart.types'
import styles from './Cart.module.css'
import CartItem from './CartItem/CartItem'

const Cart = ({ onHideCart }: CartProps) => {
	const cartContext = useContext(CartContext)
	const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`
	const hasItems = cartContext.items.length > 0

	const addCartItemHandler = (item: Item) => {cartContext.addItem({...item, amount: 1})}
	const removeCartItemHandler = (id: string) => {cartContext.removeItem(id)}

	const cartItems = (
		<ul className={styles['cart-items']}>
			{cartContext.items.map(cart => (
				<CartItem
					key={cart.id}
					id={cart.id}
					price={cart.price}
					name={cart.name}
					amount={cart.amount}
					onAdd={addCartItemHandler}
					onRemove={removeCartItemHandler}
				/>
			))}
		</ul>
	)

	return (
		<Modal onHideCart={onHideCart}>
			{cartItems}
			<div className={styles.total}>
				<span>Итого</span>
				<span>{totalAmount}</span>
			</div>
			<div className={styles.actions}>
				<button className={styles['button--alt']} onClick={onHideCart}>
					Закрыть
				</button>
				{hasItems && <button className={styles.button}>Заказать</button>}
			</div>
		</Modal>
	)
}

export default Cart

