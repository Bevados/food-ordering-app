import { useState } from 'react'
import Cart from './Cart/Cart'
import Header from './Layout/Header/Header'
import Meals from './Meals/Meals'

function App() {
	const [cartIsVisible, setCartISVisible] = useState(false)

	function showCartHandler() {
		setCartISVisible(true)
	}

	function hideCartHandler() {
		setCartISVisible(false)
	}
	return (
		<>
			{cartIsVisible && <Cart onHideCart={hideCartHandler} />}
			<Header onShowCart={showCartHandler} />
			<main>
				<Meals />
			</main>
		</>
	)
}

export default App
