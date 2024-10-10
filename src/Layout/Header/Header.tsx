import SushiImg from '../../assets/sushi.jpg'
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton'
import {HeaderProps} from './Header.types'
import styles from './Header.module.css'

const Header = ({ onShowCart }: HeaderProps) => {
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
