/**
 * Интерфейс для пропсов компонента MealItemForm.
 *
 * @property {string} id - Уникальный идентификатор блюда.
 * @property {(inputAmount: number) => void} onAddToCart - Функция для обработки добавления блюда в корзину с указанным количеством.
 */

export interface MealItemFormProps {
	id: string
	onAddToCart: (inputAmount: number) => void
}
