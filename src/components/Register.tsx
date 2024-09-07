import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../api'

const Register: FC = () => {
	let navigate = useNavigate()
	const [username, setName] = useState('mor_2314')
	const [password, setPassword] = useState('83r5^_')

	const handleLogin = e => {
		e.preventDefault()
		let user = {
			username,
			password,
		}
		console.log(user)
		axios
			.post('/auth/login', user)
			.then(res => {
				console.log('res>>>', res.data.token)
				localStorage.setItem('x-auth-token', res.data.token)
				navigate('/admin')
			})
			.catch(err => {
				console.log('err>>>', err)
			})
	}

	return (
		<div>
			<section className='register'>
				<div className='container'>
					<h3 className='massega-title'>
						<span>Home</span>/Login
					</h3>
					<form onSubmit={handleLogin} className='register-form'>
						<div className='register-form-inputs'>
							<p className='register-form-inputs-text'>UserName</p>
							<input
								value={username}
								onChange={e => setName(e.target.value)}
								type='text'
								className='register-form-input'
							/>
						</div>
						<div className='register-form-inputs'>
							<p className='register-form-inputs-text'>Password</p>
							<input
								value={password}
								onChange={e => setPassword(e.target.value)}
								type='password'
								className='register-form-input'
							/>
						</div>
						<button className='register-form-btn'>LOGIN</button>
					</form>
				</div>
			</section>
		</div>
	)
}

export default Register
