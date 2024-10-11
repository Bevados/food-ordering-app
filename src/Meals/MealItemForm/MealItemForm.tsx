import { useRef, useState } from 'react'
import Input from '../../UI/Input/Input'
import styles from './MealItemForm.module.css'

interface MealItemFormProps {
	id: string
	onAddToCart: (inputAmount: number) => void
}

const MealItemForm = ({ id, onAddToCart }: MealItemFormProps) => {
	const [isAmountValid, setIsAmountValid] = useState<boolean>(true)

	const amountInputRef = useRef<HTMLInputElement>(null)

	function submitHandler(evt: React.FormEvent<HTMLFormElement>) {
		evt.preventDefault()

		let inputAmount: string = ''

		if (amountInputRef.current) {
			inputAmount = amountInputRef.current.value
		}

		if (inputAmount.trim().length === 0 || +inputAmount < 1 || +inputAmount > 10) {
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
			{!isAmountValid && <p className={styles.error}>Пожалуйста введите количество от 1 до 10</p>}
		</form>
	)
}

export default MealItemForm
