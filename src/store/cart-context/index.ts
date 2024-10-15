import { ReactElement } from 'react'

/**
 * Тип для представления элемента в корзине
 */
export interface Item {
	id: string
	name: string
	amount: number
	price: number
}

/**
 * Тип для контекста корзины
 */
export interface CartContextType {
	items: Item[]
	totalAmount: number
	addItem: (item: Item) => void
	removeItem: (id: string) => void
	clearCart: () => void
}

/**
 * Тип для дочерних элемнтов провайдера контекста корзины
 */
export interface CartContextProviderProps {
	children: ReactElement
}

/**
 * Тип начального состояния корзины
 */
export interface InitialCartStateType {
	items: Item[]
	totalAmount: number
}

/**
 * Тип действия редьюсера корзины
 */
export type CartActionReducer =
	| {
			type: 'ADD_ITEM'
			item: Item
	  }
	| {
			type: 'REMOVE_ITEM'
			id: string
	  }
	| {
			type: 'CLEAR_CART'
	  }
