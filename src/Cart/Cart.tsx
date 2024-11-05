import { useContext, useState } from 'react'
import Modal from '../UI/Modal/Modal'
import CartContext from '../store/cart-context/cart-context'
import { CartProps, Item, UserData } from '.'
import styles from './Cart.module.css'
import CartItem from './CartItem/CartItem'
import SubmitOrder from './SubmitOrder/SubmitOrder'

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
	const [formAddressIsOpen, setFormAddressIsOpen] = useState<boolean>(false)
	const [isDataSubmitting, setIsDataSubmitting] = useState<boolean>(false)
	const [wasDataSendingSuccessful, setWasDataSendingSuccessful] =
		useState<boolean>(false)
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
	const orderHandler = () => {
		setFormAddressIsOpen(true)
	}

	/**
	 * Отправка данных пользователя на сервер.
	 */
	const submitOrderHandler = async (userData: UserData) => {
		setIsDataSubmitting(true)
			try {
			const response = await fetch(
				'https://react-http-1020c-default-rtdb.firebaseio.com/orders.json',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						user: userData,
						ordersMeals: cartContext.items
					})
				}
			)

			if (!response.ok) {
				throw new Error('Ошибка отправки данных')
			}

			console.log('Заказ успешно отправлен')
		} catch (error) {
			console.error('Ошибка при отправке данных:', error)
			setIsDataSubmitting(false)
		}
		setIsDataSubmitting(false)
		setWasDataSendingSuccessful(true)
		cartContext.clearCart();
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

	const cartModalContent = (
		<>
			{cartItems}
			<div className={styles.total}>
				<span>Итого</span>
				<span>{totalAmount}</span>
			</div>

			{formAddressIsOpen && (
				<SubmitOrder onCancel={onHideCart} onSubmit={submitOrderHandler} />
			)}

			{!formAddressIsOpen && (
				<div className={styles.actions}>
					<button className={styles['button--alt']} onClick={onHideCart}>
						Закрыть
					</button>
					{hasItems && (
						<button className={styles.button} onClick={orderHandler}>
							Заказать
						</button>
					)}
				</div>
			)}
		</>
	)

	const dataSubmittingCartModalContent = <p>Отправка данных заказа...</p>
	const dataWasSubmittedCartModalContent = (
		<>
			<p>Ваш заказ успешно отправлен!</p>
			<div className={styles.actions}>
				<button className={styles['button--alt']} onClick={onHideCart}>
					Закрыть
				</button>
			</div>
		</>
	)

	return (
		<Modal onHideCart={onHideCart}>
			{!isDataSubmitting && !wasDataSendingSuccessful && cartModalContent}
			{isDataSubmitting && dataSubmittingCartModalContent}
			{wasDataSendingSuccessful && dataWasSubmittedCartModalContent}
		</Modal>
	)
}

export default Cart
