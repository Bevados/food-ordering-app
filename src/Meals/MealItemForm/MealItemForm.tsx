import { useRef, useState } from 'react'
import { MealItemFormProps } from '.'
import Input from '../../UI/Input/Input'
import styles from './MealItemForm.module.css'

/**
 * Компонент MealItemForm.
 *
 * Отображает форму для выбора количества блюда и добавления его в корзину.
 * Проверяет корректность введенного количества (от 1 до 10).
 *
 * @param {MealItemFormProps} props - Пропсы компонента, содержащие id блюда и функцию для добавления в корзину.
 * @returns {JSX.Element} Форма для выбора количества блюда и кнопка для добавления.
 */
const MealItemForm = ({ id, onAddToCart }: MealItemFormProps): JSX.Element => {
	const [isAmountValid, setIsAmountValid] = useState<boolean>(true)
	const amountInputRef = useRef<HTMLInputElement>(null)

	/**
	 * Обработчик отправки формы.
	 * Проверяет введенное количество и вызывает функцию onAddToCart, если количество корректно.
	 *
	 * @param {React.FormEvent<HTMLFormElement>} evt - Событие отправки формы.
	 */
	function submitHandler(evt: React.FormEvent<HTMLFormElement>) {
		evt.preventDefault()

		let inputAmount: string = ''

		if (amountInputRef.current) {
			inputAmount = amountInputRef.current.value
		}

		if (
			inputAmount.trim().length === 0 ||
			+inputAmount < 1 ||
			+inputAmount > 10
		) {
			setIsAmountValid(false)
			return
		}

		onAddToCart(+inputAmount)
	}

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				label='Количество'
				id={id}
				type='number'
				min='1'
				step='1'
				defaultValue='1'
			/>
			<button>Добавить</button>
			{!isAmountValid && (
				<p className={styles.error}>Пожалуйста введите количество от 1 до 10</p>
			)}
		</form>
	)
}

export default MealItemForm
