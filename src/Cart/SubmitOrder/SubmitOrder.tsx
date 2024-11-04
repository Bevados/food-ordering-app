import { useRef } from 'react'
import { SubmitOrderProps } from '.'
import styles from './SubmitOrder.module.css'

const SubmitOrder = ({ onCancel }: SubmitOrderProps) => {
	const nameInputRef = useRef<HTMLInputElement>(null)
	const cityInputRef = useRef<HTMLInputElement>(null)
	const addressInputRef = useRef<HTMLInputElement>(null)

	const confirmOrderHandler = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()

		const enteredName = nameInputRef.current?.value || '';
		const enteredCity = cityInputRef.current?.value || '';
		const enteredAddress = addressInputRef.current?.value || '';
	}

	return (
		<form className={styles.form} onSubmit={confirmOrderHandler}>
			<div className={styles.control}>
				<label htmlFor='name'>Введите имя</label>
				<input id='name' type='text' ref={nameInputRef} />
			</div>
			<div className={styles.control}>
				<label htmlFor='city'>Введите название города</label>
				<input id='city' type='text' ref={cityInputRef} />
			</div>
			<div className={styles.control}>
				<label htmlFor='address'>Введите адрес</label>
				<input id='address' type='text' ref={addressInputRef} />
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
