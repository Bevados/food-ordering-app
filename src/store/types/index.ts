import { ReactElement } from 'react'

export interface Item {
	id: string
	name: string
	amount: number
	price: number
}

export interface CartContextType {
	items: Item[]
	totalAmount: number
	addItem: (item: Item) => void
	removeItem: (id: string) => void
}

export interface CartContextProviderProps {
	children: ReactElement
}

export interface InitialCartStateType {
	items: Item[]
	totalAmount: number
}

export type CartActionReducer =
	| {
			type: 'ADD_ITEM'
			item: Item
	  }
	| {
			type: 'REMOVE_ITEM'
			id: string
	  }
