import SushiImg from '../../assets/sushi.jpg'
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton'
import { HeaderProps } from '.'
import styles from './Header.module.css'

/**
 * Компонент Header.
 *
 * Отображает заголовок и кнопку для показа корзины. Также выводит фоновое изображение японской кухни.
 *
 * @param {HeaderProps} props - Пропсы компонента, включая функцию для показа корзины.
 * @returns {JSX.Element} JSX-элемент заголовка с кнопкой и изображением.
 */
const Header = ({ onShowCart }: HeaderProps): JSX.Element => {
	return (
		<>
			<header className={styles.header}>
				<h1>Япона Кухня</h1>
				<HeaderCartButton onClick={onShowCart} />
			</header>
			<div className={styles['main-image']}>
				<img src={SushiImg} alt='Блюда японской кухни' />
			</div>
		</>
	)
}

export default Header
