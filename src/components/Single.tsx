import { FC, useState } from 'react'
import { FaFacebookF, FaRegHeart, FaTwitter } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import star from '../assets/star.png'
import { addToCart } from '../context/slice/cartSlice'
import { toggleHeart } from '../context/slice/heartSlice'
import Skeleton from './Skeleton'

const Single: FC = ({ products, isLoading }) => {
	const dispatch = useDispatch()
	const [count, setCount] = useState(1)
	return (
		<div>
			{isLoading ? (
				<Skeleton />
			) : (
				<section className='single-route'>
					<div className='container'>
						<div className='single-route-style'>
							<div className='single-route-style-imgs'>
								<img
									className='single-route-img'
									src={products?.image}
									alt={products?.title}
								/>
								<div className='single-route-style-imgs-images'>
									<img
										className='single-route-img2'
										src={products?.image}
										alt={products?.title}
									/>
									<img
										className='single-route-img2'
										src={products?.image}
										alt={products?.title}
									/>
									<img
										className='single-route-img2'
										src={products?.image}
										alt={products?.title}
									/>
									<img
										className='single-route-img2'
										src={products?.image}
										alt={products?.title}
									/>
								</div>
							</div>
							<div className='single-route-content'>
								<h1 className='single-route-title'>{products?.title}</h1>
								<div className='single-route-box'>
									<img src={star} alt={products?.rating?.rate} />
									<p className='single-route-box-stock'>
										{products?.rating?.count} reviews
									</p>
									<a href='#' className='single-route-box-text'>
										Submit a review
									</a>
								</div>
								<hr />
								<div className='single-route-prices'>
									<p className='single-route-prices-price'>
										${products?.price}
									</p>
									<s>${products?.price * 2}</s>
									<p className='single-route-prices-sale'>24% Off</p>
								</div>
								<p className='single-route-atribute'>
									Availability: <span>In stock</span>
								</p>
								<p className='single-route-atribute'>
									Category: <span>Accessories</span>
								</p>
								<p className='single-route-atribute'>Free shipping</p>
								<hr />
								<div className='single-route-colors'>
									<p className='single-route-colors-text'>Select Color:</p>
									<div className='single-route-colors-color'></div>
									<div className='single-route-colors-color'></div>
									<div className='single-route-colors-color'></div>
									<div className='single-route-colors-color'></div>
								</div>
								<div className='single-route-size'>
									<p className='single-route-size-text'>Size</p>
									<select name='' className='single-route-size-select'>
										<option value=''>XS</option>
										<option value=''>M</option>
										<option value=''>L</option>
										<option value=''>G</option>
									</select>
								</div>
								<hr />
								<div className='single-route-btn-box'>
									<div className='single-route-btns'>
										<button
											disabled={count <= 1}
											onClick={() => setCount(p => p - 1)}
											className='single-route-btns-inc'
										>
											-
										</button>
										<button className='single-route-btns-count'>{count}</button>
										<button
											onClick={() => setCount(p => p + 1)}
											className='single-route-btns-dec'
										>
											+
										</button>
									</div>
									<div className='single-route-btn-add-heart'>
										<button
											className='single-route-btn-add'
											onClick={() => dispatch(addToCart(products))}
										>
											<IoCartOutline color='#33A0FF' />
											Add To Cart
										</button>
										<button
											className='single-route-btn-heart'
											onClick={() => dispatch(toggleHeart(products))}
										>
											<FaRegHeart />
										</button>
									</div>
								</div>
								<hr />
								<div className='single-route-faceboock-twitter'>
									<button className='single-route-faceboock'>
										<a href='https://www.facebook.com'>
											<FaFacebookF />
											Share on Facebook
										</a>
									</button>
									<button className='single-route-twitter'>
										<a href='https://x.com/'>
											<FaTwitter />
											Share on Twitter
										</a>
									</button>
								</div>
							</div>
							<div className='single-route-style-seller'>
								<p className='single-route-style-seller-title'>BEST SELLER</p>
								<div className='single-route-style-seller-content'>
									<img
										className='single-route-style-seller-content-img'
										src={products?.image}
										alt={products?.title}
									/>
									<img className='seller-img' src={star} alt='star' />
									<div className='single-route-style-seller-content-prices'>
										<p className='single-route-style-seller-content-prices-price'>
											${products?.price}
										</p>
										<s>${products?.price * 2}</s>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			)}
		</div>
	)
}

export default Single
