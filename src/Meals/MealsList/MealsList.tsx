import { useEffect, useState } from 'react'
import Card from '../../UI/Card/Card'
import MealsItem from '../MealsItem/MealsItem'
import { MealProps } from '.'
import styles from './MealsList.module.css'

/**
 * Массив с данными о блюдах для отображения в меню.
 */
// const DUMMY_MEALS = [
// 	{
// 		id: 'm1',
// 		name: 'Ролл "Наоми"',
// 		description:
// 			'Сыр Филадельфия, куриное филе, масаго, помидор, огурец, кунжут',
// 		price: 11.99
// 	},
// 	{
// 		id: 'm2',
// 		name: 'Спайс в лососе',
// 		description: 'Рис, лосось, соус спайс',
// 		price: 3.99
// 	},
// 	{
// 		id: 'm3',
// 		name: 'Суши с угрем',
// 		description: 'Угорь копченый, соус унаги, кунжут',
// 		price: 4.99
// 	},
// 	{
// 		id: 'm4',
// 		name: 'Салат "Поке с лососем"',
// 		description:
// 			'Рис, лосось, огурец, чука, нори, стружка тунца, соус ореховый',
// 		price: 7.99
// 	}
// ]

/**
 * Компонент MealsList.
 *
 * Отображает список блюд в виде отдельных элементов меню, используя компонент MealsItem.
 * Блюда берутся из заранее подготовленного массива данных `DUMMY_MEALS`.
 *
 * @returns {JSX.Element} Секция с карточкой, содержащей список блюд.
 */
const MealsList = (): JSX.Element => {
	const [isLoading, setIsLoading] = useState(false)
	const [isHttpError, setIsHttpError] = useState<string>('')
	const [meals, setMeals] = useState<MealProps[]>([])

	const mealsListFetch = async () => {
		setIsHttpError('')
		setIsLoading(true)
		try {
			const response = await fetch(
				'https://react-http-1020c-default-rtdb.firebaseio.com/meals.json'
			)

			if (!response.ok) throw new Error('Ошибка загрузки данных')

			const data = await response.json()
			const mealsArray: MealProps[] = Object.keys(data).map(key => ({
				id: key,
				...data[key]
			}))
			setMeals(mealsArray)
			setIsLoading(false)
		} catch (e) {
			setIsLoading(false)
			setIsHttpError((e as Error).message)
		}
	}

	useEffect(() => {
		mealsListFetch()
	}, [])

	const mealList = meals.map(meal => (
		<MealsItem
			key={meal.id}
			name={meal.name}
			price={meal.price}
			description={meal.description}
			id={meal.id}
		/>
	))

	return (
		<section className={styles.meals}>
			<Card>
				{isLoading && <p>Загрузка данных с сервера</p>}
				{isHttpError && <p>{isHttpError}</p>}
				<ul>{mealList}</ul>
			</Card>
		</section>
	)
}

export default MealsList
