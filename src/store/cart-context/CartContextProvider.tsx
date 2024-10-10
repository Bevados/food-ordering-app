import { useReducer } from 'react'
import {
	CartActionReducer,
	CartContextProviderProps,
	CartContextType,
	InitialCartStateType,
	Item
} from '../types'
import CartContext from './cart-context'

const InitialCartState: InitialCartStateType = {
	items: [],
	totalAmount: 0
}

const cartReducer = (
	state: InitialCartStateType,
	action: CartActionReducer
) => {
	switch (action.type) {
		case 'ADD_ITEM':
			return {
				items: [...state.items, action.item],
				totalAmount: state.totalAmount + action.item.amount * action.item.price
			}
	}

	return InitialCartState
}

const CartContextProvider = ({ children }: CartContextProviderProps) => {
	const [cartState, dispatchCartState] = useReducer(
		cartReducer,
		InitialCartState
	)

	function addItemHandler(item: Item) {
		dispatchCartState({ type: 'ADD_ITEM', item: item })
	}
	function removeItemHandler(id: string) {
		dispatchCartState({ type: 'REMOVE_ITEM', id: id })
	}

	const cartContext: CartContextType = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemHandler,
		removeItem: removeItemHandler
	}

	return (
		<CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
	)
}

export default CartContextProvider
