import { useRef, useState } from 'react'
import { FormValidity, SubmitOrderProps } from '.'
import styles from './SubmitOrder.module.css'

const isInputValid = (inputValue: string): boolean => inputValue.trim() !== ''

const SubmitOrder = ({ onCancel, onSubmit }: SubmitOrderProps) => {
	const [formValidity, setFormValidity] = useState<FormValidity>({
		name: true,
		city: true,
		address: true
	})

	const nameInputRef = useRef<HTMLInputElement>(null)
	const cityInputRef = useRef<HTMLInputElement>(null)
	const addressInputRef = useRef<HTMLInputElement>(null)

	const confirmOrderHandler = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()

		const enteredName = nameInputRef.current?.value || ''
		const enteredCity = cityInputRef.current?.value || ''
		const enteredAddress = addressInputRef.current?.value || ''

		const isEnteredNameValid = isInputValid(enteredName)
		const isEnteredCityValid = isInputValid(enteredCity)
		const isEnteredAddressValid = isInputValid(enteredAddress)

		setFormValidity({
			name: isEnteredNameValid,
			city: isEnteredCityValid,
			address: isEnteredAddressValid
		})

		const isFormValid =
			isEnteredNameValid && isEnteredCityValid && isEnteredAddressValid

		if (!isFormValid) {
			return
		}

		onSubmit({
			name: enteredName,
			city: enteredCity,
			address: enteredAddress
		})
	}

	return (
		<form className={styles.form} onSubmit={confirmOrderHandler}>
			<div
				className={`${styles.control} ${!formValidity.name && styles.invalid}`}
			>
				<label htmlFor='name'>Имя</label>
				<input id='name' type='text' ref={nameInputRef} />
				{!formValidity.name && <p>Введите имя</p>}
			</div>
			<div
				className={`${styles.control} ${!formValidity.city && styles.invalid}`}
			>
				<label htmlFor='city'>Город</label>
				<input id='city' type='text' ref={cityInputRef} />
				{!formValidity.city && <p>Введите название города</p>}
			</div>
			<div
				className={`${styles.control} ${
					!formValidity.address && styles.invalid
				}`}
			>
				<label htmlFor='address'>Адрес</label>
				<input id='address' type='text' ref={addressInputRef} />
				{!formValidity.address && <p>Введите адрес</p>}
			</div>
			<div className={styles.actions}>
				<button className={styles.submit} type='submit'>
					Подтвердить заказ
				</button>
				<button type='button' onClick={onCancel}>
					Отменить заказ
				</button>
			</div>
		</form>
	)
}

export default SubmitOrder
