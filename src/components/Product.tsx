import { useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import star from '../assets/star.png'
import Loading from '../components/Loading'
import {
	useGetCategoryPtoductQuery,
	useGetProductsQuery,
} from '../context/api/productApi'
import { addToCart } from '../context/slice/cartSlice'
import { toggleHeart } from '../context/slice/heartSlice'

const Product = ({ title, item, count }) => {
	const wishlist = useSelector(s => s.heart.value)
	const cart = useSelector(s => s.cart.value)

	const [selectedCategory, setselectedCategory] = useState('/')
	let dispatch = useDispatch()
	const [offset, setOffset] = useState(1)
	let { data: categories } = useGetCategoryPtoductQuery()
	let { data, isLoading } = useGetProductsQuery({
		params: { limit: offset * count },
		path: selectedCategory,
	})

	let products = data?.map(el => (
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
					className='product-card-box-btn'
				>
					{wishlist?.some(item => item.id === el.id) ? (
						<FaRegHeart style={{ color: 'red' }} />
					) : (
						<FaRegHeart />
					)}
				</button>
				<button
					onClick={() => dispatch(addToCart(el))}
					className='product-card-box-btn'
				>
					{cart?.some(item => item.id === el.id) ? (
						<FiShoppingCart style={{ color: 'red' }} />
					) : (
						<FiShoppingCart />
					)}
				</button>
			</div>
		</div>
	))

	let category = categories?.map(el => (
		<data
			onClick={e => setselectedCategory(e.target.value)}
			value={`/category/${el}`}
			key={el}
			className={`product-items-item ${
				selectedCategory === `/category/${el}` ? 'item-active' : ''
			}`}
		>
			{el}
		</data>
	))

	return (
		<div>
			<section className='product'>
				<div className='container'>
					<h1 className='product-title'>{title}</h1>
					{item ? (
						<div className='product-items'>
							<data
								onClick={e => setselectedCategory(e.target.value)}
								value='/'
								className={`product-items-item ${
									selectedCategory === '/' ? 'item-active' : ''
								}`}
							>
								All
							</data>
							{category}
						</div>
					) : (
						<></>
					)}
					<div className='product-cards'>
						{isLoading ? <Loading /> : products}
					</div>
					{item ? (
						<button
							className='product-btn'
							onClick={() => setOffset(p => p + 1)}
						>
							LOAD MORE
						</button>
					) : (
						<></>
					)}
				</div>
			</section>
		</div>
	)
}

export default Product
