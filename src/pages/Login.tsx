import { FC, useEffect } from 'react'
import Register from '../components/Register'

const Login: FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div>
			<Register />
		</div>
	)
}

export default Login
