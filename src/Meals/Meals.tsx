import MealsList from './MealsList/MealsList'
import PromoText from './PromoText/PromoText'

/**
 * Компонент Meals.
 *
 * Отображает промо-текст и список блюд.
 * Состоит из двух подкомпонентов: PromoText и MealsList.
 *
 * @returns {JSX.Element} Секция с промо-текстом и списком блюд.
 */
const Meals = (): JSX.Element => {
	return (
		<>
			<PromoText />
			<MealsList />
		</>
	)
}

export default Meals
