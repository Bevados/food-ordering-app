import { useContext, useState } from 'react'
import Modal from '../UI/Modal/Modal'
import CartContext from '../store/cart-context/cart-context'
import { CartProps, Item } from '.'
import styles from './Cart.module.css'
import CartItem from './CartItem/CartItem'

/**
 * Компонент Cart.
 *
 * Отображает модальное окно с содержимым корзины покупок.
 * Позволяет пользователю добавлять и удалять элементы из корзины.
 *
 * @param {CartProps} props - Пропсы компонента, содержащие функцию для скрытия корзины.
 * @returns {JSX.Element} Модальное окно с содержимым корзины.
 */
const Cart = ({ onHideCart }: CartProps): JSX.Element => {
	const [orderPlaced, setOrderPlaced] = useState<boolean>(false)
	const cartContext = useContext(CartContext)
	const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`
	const hasItems = cartContext.items.length > 0

	/**
	 * Обработчик добавления элемента в корзину.
	 * @param {Item} item - Элемент, который нужно добавить в корзину.
	 */
	const addCartItemHandler = (item: Item) => {
		cartContext.addItem({ ...item, amount: 1 })
	}

	/**
	 * Обработчик удаления элемента из корзины.
	 * @param {string} id - Уникальный идентификатор элемента, который нужно удалить.
	 */
	const removeCartItemHandler = (id: string) => {
		cartContext.removeItem(id)
	}

	/**
	 * Обработчик подтверждения заказа.
	 */
	const onOrderPlaced = () => {
		setOrderPlaced(true)
		cartContext.clearCart()
	}

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
			{!orderPlaced && (
				<>
					{cartItems}
					<div className={styles.total}>
						<span>Итого</span>
						<span>{totalAmount}</span>
					</div>
					<div className={styles.actions}>
						<button className={styles['button--alt']} onClick={onHideCart}>
							Закрыть
						</button>
						{hasItems && (
							<button className={styles.button} onClick={onOrderPlaced}>
								Заказать
							</button>
						)}
					</div>
				</>
			)}
			{orderPlaced && (
				<>
					<div className={styles.total}>
						<span>Спасибо за ваш заказ</span>
					</div>
					<div className={styles.actions}>
						<button className={styles['button--alt']} onClick={onHideCart}>
							Закрыть
						</button>
					</div>
				</>
			)}
		</Modal>
	)
}

export default Cart
