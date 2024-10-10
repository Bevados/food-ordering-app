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
