import { useContext } from 'react'
import MealItemForm from '../MealItemForm/MealItemForm'
import CartContext from '../../store/cart-context/cart-context'
import styles from './MealsItem.module.css'

interface MealsItemProps {
	name: string
	description: string
	price: number
	id: string
}

const MealsItem = ({ name, description, price, id }: MealsItemProps) => {
	const context = useContext(CartContext)
	const formattedPrice = `$${price.toFixed(2)}`

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
