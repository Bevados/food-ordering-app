import styles from './Input.module.css'

interface InputProps {
	label: string
	id: string
	type: 'text' | 'number'
	min?: string
	step?: string
	defaultValue?: string
}

const Input = ({ label, id, type, min, step, defaultValue }: InputProps) => {
	return (
		<div className={styles.input}>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				type={type}
				min={min}
				step={step}
				defaultValue={defaultValue}
			/>
		</div>
	)
}

export default Input
