export interface SubmitOrderProps {
	onCancel: () => void
	onSubmit: (userData: UserData) => void
}

export interface FormValidity {
	name: boolean
	city: boolean
	address: boolean
}

export interface UserData {
	name: string
	city: string
	address: string
}
