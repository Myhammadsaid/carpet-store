import { FC } from 'react'
import img1 from '../assets/product-img1.png'
import img2 from '../assets/product-img2.png'
import img3 from '../assets/product-img3.png'

const ProductBox: FC = () => {
	return (
		<div>
			<section className='product-box'>
				<div className='container'>
					<div className='product-box-cards'>
						<div className='product-box-cards-card'>
							<h3 className='product-box-cards-card-text'>
								FS - QUILTED MAXI CROSS BAG
							</h3>
							<img
								className='product-box-cards-card-img'
								src={img1}
								alt='product-img'
							/>
							<p className='product-box-cards-card-prices'>
								<s>$534,33</s>
								<span>24% Off</span>
							</p>
							<h2 className='product-box-cards-card-price'>$299,43</h2>
						</div>
						<div className='product-box-cards-card'>
							<h3 className='product-box-cards-card-text'>
								FS - Nike Air Max 270 React...
							</h3>
							<img
								className='product-box-cards-card-img'
								src={img2}
								alt='product-img'
							/>
							<p className='product-box-cards-card-prices'>
								<s>$534,33</s>
								<span>24% Off</span>
							</p>
							<h2 className='product-box-cards-card-price'>$299,43</h2>
						</div>
						<div className='product-box-cards-card'>
							<h3 className='product-box-cards-card-text'>
								FS - Nike Air Max 270 React...
							</h3>
							<img
								className='product-box-cards-card-img'
								src={img3}
								alt='product-img'
							/>
							<p className='product-box-cards-card-prices'>
								<s>$534,33</s>
								<span>24% Off</span>
							</p>
							<h2 className='product-box-cards-card-price'>$299,43</h2>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default ProductBox
