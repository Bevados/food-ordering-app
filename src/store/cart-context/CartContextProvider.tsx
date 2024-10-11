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
		case 'ADD_ITEM': {
			const existingCartItemIndex = state.items.findIndex(
				item => item.id === action.item.id
			)
			const existingCartItem = state.items[existingCartItemIndex]
			let updateItems: Item[]

			if (existingCartItem) {
				const updateItem: Item = {
					...existingCartItem,
					amount: existingCartItem.amount + action.item.amount
				}

				updateItems = [...state.items]
				updateItems[existingCartItemIndex] = updateItem
			} else {
				updateItems = [...state.items, action.item]
			}

			return {
				...state,
				items: [...updateItems],
				totalAmount: state.totalAmount + action.item.amount * action.item.price
			}
		}

		case 'REMOVE_ITEM': {
			const existingCartItemIndex = state.items.findIndex(
				item => item.id === action.id
			)

			const existingCartItem = state.items[existingCartItemIndex]

			let updateItems: Item[]

			if (existingCartItem.amount === 1) {
				updateItems = state.items.filter(item => item.id != existingCartItem.id)
			} else {
				const updateItem = {
					...existingCartItem,
					amount: existingCartItem.amount - 1
				}

				updateItems = [...state.items]
				updateItems[existingCartItemIndex] = updateItem
			}

			return {
				...state,
				items: [...updateItems],
				totalAmount: state.totalAmount - existingCartItem.price
			}
		}

		default:
			return state
	}
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
