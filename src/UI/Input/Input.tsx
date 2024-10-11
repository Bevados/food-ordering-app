import { forwardRef, ForwardedRef } from 'react'
import styles from './Input.module.css'

interface InputProps {
	label: string
	id: string
	type: 'text' | 'number'
	min?: string
	step?: string
	defaultValue?: string
}

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
