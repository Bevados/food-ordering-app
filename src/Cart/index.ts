/**
 * Интерфейс для представления элемента в корзине.
 *
 * @property {string} id - Уникальный идентификатор элемента.
 * @property {string} name - Название элемента.
 * @property {number} amount - Количество элемента.
 * @property {number} price - Цена элемента.
 */
export interface Item {
	id: string
	name: string
	amount: number
	price: number
}

/**
 * Интерфейс для пропсов компонента Cart.
 *
 * @property {() => void} onHideCart - Функция для скрытия корзины.
 */
export interface CartProps {
	onHideCart: () => void
}

/**
 * Интерфейс для пропсов компонента CartItem.
 *
 * @property {string} id - Уникальный идентификатор элемента.
 * @property {number} price - Цена элемента.
 * @property {string} name - Название элемента.
 * @property {number} amount - Количество элемента.
 * @property {(id: string) => void} onRemove - Функция для удаления элемента из корзины.
 * @property {(item: Item) => void} onAdd - Функция для добавления элемента в корзину.
 */
export interface CartItemProps extends Item {
	id: string
	price: number
	name: string
	amount: number
	onRemove: (id: string) => void
	onAdd: (item: Item) => void
}


export interface UserData {
	name: string
	city: string
	address: string
}