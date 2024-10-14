import { useContext } from 'react'
import MealItemForm from '../MealItemForm/MealItemForm'
import CartContext from '../../store/cart-context/cart-context'
import { MealsItemProps } from '.'
import styles from './MealsItem.module.css'

/**
 * Компонент MealsItem.
 *
 * Отображает информацию о конкретном блюде, включая его название, описание и цену.
 * Также предоставляет форму для добавления блюда в корзину.
 *
 * @param {MealsItemProps} props - Пропсы компонента, содержащие информацию о блюде.
 * @returns {JSX.Element} Элемент списка с информацией о блюде и формой для добавления в корзину.
 */
const MealsItem = ({ name, description, price, id }: MealsItemProps): JSX.Element => {
	const context = useContext(CartContext)
	const formattedPrice = `$${price.toFixed(2)}`

	/**
	 * Обработчик добавления блюда в корзину из компонента MealItemForm.
	 *
	 * @param {number} amount - Количество добавляемого блюда.
	 */
	function addToCartHandler(amount: number) {
		context.addItem({
			id: id,
			name: name,
			amount: amount,
			price: price
		})
	}

	return (
		<li className={styles.meal}>
			<div>
				<h3 className={styles.name}>{name}</h3>
				<div className={styles.description}>{description}</div>
				<div className={styles.price}>{formattedPrice}</div>
			</div>
			<MealItemForm onAddToCart={addToCartHandler} id={id} />
		</li>
	)
}

export default MealsItem
