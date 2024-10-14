/**
 * Интерфейс для пропсов компонента MealsItem.
 *
 * @property {string} id - Уникальный идентификатор блюда.
 * @property {string} name - Название блюда.
 * @property {string} description - Описание блюда.
 * @property {number} price - Цена блюда.
 */
export interface MealsItemProps {
	id: string
	name: string
	description: string
	price: number
}
