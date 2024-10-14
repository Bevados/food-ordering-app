import { createContext } from 'react'
import { CartContextType } from '.'

/**
 * Создает контекст для корзины.
 * Хранит информацию о товарах в корзине, общей стоимости и предоставляет функции для добавления и удаления товаров в корзине.
 */
const CartContext = createContext<CartContextType>({
	items: [],
	totalAmount: 0,
	addItem: _item => {
		void _item // Заглушка
	},
	removeItem: _id => {
		void _id // Заглушка
	}
})

export default CartContext
