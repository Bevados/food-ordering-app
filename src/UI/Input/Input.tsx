import { forwardRef, ForwardedRef } from 'react'
import { InputProps } from '.'
import styles from './Input.module.css'

/**
 * Компонент Input.
 *
 * Отображает поле ввода с меткой.
 * Позволяет передавать ссылки на элемент input с помощью React.forwardRef.
 *
 * @param {InputProps} props - Пропсы компонента, содержащие информацию о поле ввода.
 * @param {ForwardedRef<HTMLInputElement>} ref - Ссылка на элемент input.
 * @returns {JSX.Element} Поле ввода с меткой.
 */
const Input = forwardRef(
	(
		{ label, id, type, min, step, defaultValue }: InputProps,
		ref: ForwardedRef<HTMLInputElement>
	) => {
		return (
			<div className={styles.input}>
				<label htmlFor={id}>{label}</label>
				<input
					ref={ref}
					id={id}
					type={type}
					min={min}
					step={step}
					defaultValue={defaultValue}
				/>
			</div>
		)
	}
)

export default Input
