import { useReducer } from 'react'
import {
	CartActionReducer,
	CartContextProviderProps,
	CartContextType,
	InitialCartStateType,
	Item
} from '.'
import CartContext from './cart-context'

/**
 * Начальное состояние корзины.
 */
const InitialCartState: InitialCartStateType = {
	items: [],
	totalAmount: 0
}

/**
 * Редьюсер для управления состоянием корзины.
 *
 * @param {InitialCartStateType} state - Текущее состояние корзины.
 * @param {CartActionReducer} action - Действие, которое нужно выполнить.
 * @returns {InitialCartStateType} Обновленное состояние корзины.
 */
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

		case 'CLEAR_CART': {
			return InitialCartState
		}

		default:
			return state
	}
}

/**
 * Провайдер контекста корзины.
 * Оборачивает дочерние компоненты и предоставляет доступ к состоянию корзины и функциям для его управления.
 *
 * @param {CartContextProviderProps} props - Пропсы провайдера, содержащие дочерние элементы.
 * @returns {JSX.Element} Элемент провайдера контекста корзины.
 */
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
	function clearCartHandler() {
		dispatchCartState({ type: 'CLEAR_CART' })
	}

	const cartContext: CartContextType = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemHandler,
		removeItem: removeItemHandler,
		clearCart: clearCartHandler
	}

	return (
		<CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
	)
}

export default CartContextProvider
