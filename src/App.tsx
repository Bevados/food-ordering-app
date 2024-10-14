import { useState } from 'react'
import Cart from './Cart/Cart'
import Header from './Layout/Header/Header'
import Meals from './Meals/Meals'
import CartContextProvider from './store/cart-context/CartContextProvider'

/**
 * Основной компонент приложения App.
 * Управляет видимостью корзины и отображает другие компоненты (Header, Meals, Cart).
 * Возвращаемые компоненты обернуты в Context для корзины.
 */

function App(): JSX.Element {
	const [cartIsVisible, setCartISVisible] = useState(false)

	/**
	 * Обработчик для показа корзины.
	 */
	function showCartHandler() {
		setCartISVisible(true)
	}

	/**
	 * Обработчик для скрытия корзины.
	 */
	function hideCartHandler() {
		setCartISVisible(false)
	}

	return (
		<CartContextProvider>
			<>
				{cartIsVisible && <Cart onHideCart={hideCartHandler} />}
				<Header onShowCart={showCartHandler} />
				<main>
					<Meals />
				</main>
			</>
		</CartContextProvider>
	)
}

export default App
