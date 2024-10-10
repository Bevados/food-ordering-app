import MealItemForm from '../MealItemForm/MealItemForm'
import styles from './MealsItem.module.css'

interface MealsItemProps {
	name: string
	description: string
	price: number
	id: string
}

const MealsItem = ({ name, description, price, id }: MealsItemProps) => {
	const formattedPrice = `$${price.toFixed(2)}`

	return (
		<li className={styles.meal}>
			<div>
				<h3 className={styles.name}>{name}</h3>
				<div className={styles.description}>{description}</div>
				<div className={styles.price}>{formattedPrice}</div>
			</div>
			<MealItemForm id={id} />
		</li>
	)
}

export default MealsItem
