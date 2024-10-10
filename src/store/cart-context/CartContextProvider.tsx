import { ReactElement } from 'react'
import { CartContextType, Item } from '../types'
import CartContext from './cart-context'

interface CartContextProviderProps {
	children: ReactElement
}

const CartContextProvider = ({ children }: CartContextProviderProps) => {
	function addItemHandler(item: Item) {return item}
	function removeItemHandler(id: string) {return id}

	const cartContext: CartContextType = {
		items: [],
		totalAmount: 0,
		addItem: addItemHandler,
		removeItem: removeItemHandler
	}

	return (
		<CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
	)
}

export default CartContextProvider
