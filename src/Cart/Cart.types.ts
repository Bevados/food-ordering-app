export interface Item {
	id: string
	name: string
	amount: number
	price: number
}

export interface CartProps {
	onHideCart: () => void
}

export interface CartItemProps {
	id: string
	price: number
	name: string
	amount: number
	onRemove: (id: string) => void
	onAdd: (item: Item) => void
}
