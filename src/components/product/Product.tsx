import { FC } from 'react'
import { BsCart } from 'react-icons/bs'
import { FaRegHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../context/slices/cartSlice'
import { toggleHeart } from '../../context/slices/wishlistSlice'
import Skeleton from '../skeleton/Skeleton'
import './Product.scss'

interface IProduct {
	id: number
	title: string
	price: number
	img: string
	size: number
	quantity: number
}

interface IProps {
	data?: IProduct[]
	title: string
	isLoading: boolean
}

const Product: FC<IProps> = ({ data, title, isLoading }) => {
	const wishlist = useSelector((state: any) => state?.wishlist?.value)
	const cart = useSelector((state: any) => state?.cart?.value)
	const dispatch = useDispatch()

	const handleAddCart = (product: IProduct) => {
		dispatch(addToCart(product))
	}

	const handleAddHeart = (heart: IProduct) => {
		dispatch(toggleHeart(heart))
	}

	let products = data?.map((el: IProduct) => (
		<div key={el.id} className='product__card'>
			<img src={el.img} alt='ProductImg' />
			<button
				className='product__card__svg1'
				onClick={() => handleAddHeart(el)}
			>
				{wishlist?.some((item: IProduct) => item.id === el.id) ? (
					<FaRegHeart style={{ color: 'red', fill: 'red' }} />
				) : (
					<FaRegHeart />
				)}
			</button>
			<button onClick={() => handleAddCart(el)} className='product__card__svg2'>
				{cart?.some((item: IProduct) => item.id === el.id) ? (
					<BsCart style={{ color: 'green', fill: 'green' }} />
				) : (
					<BsCart />
				)}
			</button>
			<Link to={`/products/${el.id}`}>
				<h2 className='product__card__text'>{el.title}</h2>
			</Link>
		</div>
	))

	return (
		<>
			<section className='product'>
				<div className='container'>
					<h1 className='product__title'>{title}</h1>
					<div className='product__cards'>
						{isLoading ? <Skeleton /> : products}
					</div>
				</div>
			</section>
		</>
	)
}

export default Product
