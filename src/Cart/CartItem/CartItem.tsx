import { CartItemProps } from '../Cart.types'
import styles from './CartItem.module.css'

// interface Item {
// 	id: string
// 	name: string
// 	amount: number
// 	price: number
// }

// interface CartItemProps {
// 	id: string
// 	price: number
// 	name: string
// 	amount: number
// 	onRemove: (id: string) => void
// 	onAdd: (item: Item) => void
// }


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
