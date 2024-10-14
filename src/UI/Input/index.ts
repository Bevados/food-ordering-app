/**
 * Интерфейс для пропсов компонента Input.
 *
 * @property {string} id - Уникальный идентификатор поля ввода.
 * @property {'text' | 'number'} type - Тип поля ввода (текст или число).
 * @property {string} label - Метка для поля ввода.
 * @property {string} [min] - Минимальное значение (для типа 'number').
 * @property {string} [step] - Шаг изменения значения (для типа 'number').
 * @property {string} [defaultValue] - Значение по умолчанию для поля ввода.
 */

export interface InputProps {
	id: string
	type: 'text' | 'number'
	label: string
	min?: string
	step?: string
	defaultValue?: string
}
