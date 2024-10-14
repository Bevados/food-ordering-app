/**
 * Интерфейс для пропсов компонента Header.
 *
 * @property {() => void} onShowCart - Функция-обработчик для показа корзины.
 */
export interface HeaderProps {
	onShowCart: () => void
}
