import { FC } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import star from '../assets/star.png'
import { addToCart } from '../context/slice/cartSlice'
import { toggleHeart } from '../context/slice/heartSlice'
import Loading from './Loading'

const Heart: FC = ({ isLoading }) => {
	const wishlist = useSelector(s => s?.heart?.value)
	const dispatch = useDispatch()

	let wishlistItems = wishlist?.map(el => (
		<div key={el.id} className='product-cards-card'>
			<img className='product-img' src={el.image} alt={el.title} />
			<div className='product-content'>
				<Link to={`/products/${el.id}`}>
					<h3 className='product-content-text' title={el.title}>
						{el.title}
					</h3>
				</Link>
				<img src={star} alt='star' />
				<div className='product-content-prices'>
					<p className='product-price'>${el.price}</p>
					<s>${el.price * 2}</s>
					<span>24% Off</span>
				</div>
			</div>
			<div className='product-card-box'>
				<button
					onClick={() => dispatch(toggleHeart(el))}
					className={`product-card-box-btn ${
						wishlist.some(item => item.id === el.id) ? 'heart-btn' : ''
					}`}
				>
					<FaRegHeart />
				</button>
				<button
					onClick={() => dispatch(addToCart(el))}
					className='product-card-box-btn'
				>
					<FiShoppingCart />
				</button>
			</div>
		</div>
	))
	return (
		<div>
			{wishlist.length ? (
				<section className='heart'>
					<div className='container'>
						<h3 style={{ marginBottom: '45px' }} className='massega-title'>
							<span>Home</span>/Wishlist
						</h3>
						<h1 className='heart-title'>Wishlist</h1>
						<div className='product-cards'>
							{isLoading ? <Loading /> : wishlistItems}
						</div>
					</div>
				</section>
			) : (
				<h2 style={{ textAlign: 'center', margin: '20px 0' }}>
					There is nothing in the heart
				</h2>
			)}
		</div>
	)
}

export default Heart
