import 'number-brm'
import { FC } from 'react'
import { AiFillCar, AiOutlineDelete } from 'react-icons/ai'
import { FaRegHeart } from 'react-icons/fa'
import { SlLocationPin } from 'react-icons/sl'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
	decrementCart,
	incrementCart,
	removeFromCart,
} from '../../context/slices/cartSlice'
import { toggleHeart } from '../../context/slices/wishlistSlice'
import './ProductCart.scss'

interface IProduct {
	id: number
	title: string
	price: number
	img: string
	size: number
	quantity: number
}

const ProductCart: FC = () => {
	const cart = useSelector((state: any) => state?.cart?.value)
	const dispatch = useDispatch()
	let navigate = useNavigate()

	let total = cart.reduce(
		(sum: number, item: IProduct) => sum + item.price * item.quantity,
		0
	)

	const carts = cart?.map((el: IProduct) => (
		<tr key={el.id} className='cart__row'>
			<td>
				<div className='cart__box'>
					<img width={110} height={172} src={el.img} alt={el.title} />
					<div>
						<h3 className='cart__text'>{el.title}</h3>
						<p className='cart__size'>Размер {el.size} см</p>
					</div>
				</div>
			</td>
			<td>
				<p className='cart__price'>{el.price} сум</p>
			</td>
			<td>
				<div className='cart__btns'>
					<button
						disabled={el.quantity === 1}
						onClick={() => dispatch(decrementCart(el))}
						className='cart__btn'
					>
						-
					</button>
					<span className='cart__quantity'>{el.quantity}</span>
					<button
						disabled={el.quantity === 5}
						onClick={() => dispatch(incrementCart(el))}
						className='cart__btn'
					>
						+
					</button>
				</div>
			</td>
			<td>
				<div className='cart__prices'>
					<p className='cart__price'>{el.price * el.quantity} сум</p>
					<button onClick={() => dispatch(removeFromCart(el.id))}>
						<AiOutlineDelete />
					</button>
					<button onClick={() => dispatch(toggleHeart(el))}>
						<FaRegHeart />
					</button>
				</div>
			</td>
		</tr>
	))

	return (
		<>
			<section className='cart'>
				<div className='container'>
					<div className='cart__header'>
						<h1 className='cart__title'>Корзина</h1>
						<span className='cart__count'>{cart?.length}</span>
					</div>
					<div className='cart__cards'>
						<table>
							<thead>
								<tr>
									<th>Название товара</th>
									<th>Цена за шт.</th>
									<th>Кол-во</th>
									<th>Итог</th>
								</tr>
							</thead>
							<tbody>{carts}</tbody>
						</table>
						<div className='cart__total__wrapper'>
							<h1 className='cart__total'>Итого: {total.brm()} сум</h1>
						</div>
						<div className='cart__shop__btns'>
							<button onClick={() => navigate('/dekor')} className='cart__shop'>
								Перейти к оформлению
							</button>
							<button disabled className='cart__shop'>
								Купить в рассрочку
							</button>
						</div>
						<div className='cart__footer'>
							<h4 className='cart__footer__title'>Доставка от Bayan Sulu</h4>
							<span>
								<p>
									<AiFillCar />
									Курьером
								</p>
								<p>
									<SlLocationPin />
									Самовывоз
								</p>
							</span>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default ProductCart
