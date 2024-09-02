import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import Img from '../../assets/heart.webp'
import './HeartEmpty.scss'

const HeartEmpty: FC = () => {
	const navigate = useNavigate()
	return (
		<>
			<div className='container'>
				<div className='cart__notfound'>
					<img src={Img} alt='CartNotFound' />
					<h1 className='cart__notfound__text'>
						There is nothing in the heart (
					</h1>
					<button onClick={() => navigate('/')} className='cart__notfound__btn'>
						Home
					</button>
				</div>
			</div>
		</>
	)
}

export default HeartEmpty
