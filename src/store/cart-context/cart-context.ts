import { createContext } from 'react'
import { CartContextType } from '../types'

const CartContext = createContext<CartContextType>({
	items: [],
	totalAmount: 0,
	addItem: _item => {
		void _item
	},
	removeItem: _id => {
		void _id
	}
})

export default CartContext
