import { FC } from 'react'
import featureImg from '../assets/feature-img.png'
import star from '../assets/star.png'

const Feature: FC = () => {
	return (
		<div>
			<section className='feature'>
				<div className='container'>
					<h2 className='feature-title'>FEATURED PRODUCTS</h2>
					<div className='feature-cards'>
						{Array(3)
							.fill('')
							.map((_, inx) => (
								<div key={inx} className='feature-card'>
									<img src={featureImg} alt='feature-Img' />
									<div className='feature-content'>
										<h2 className='feature-text'>Blue Swade Nike Sneakers</h2>
										<img src={star} alt='star-img' />
										<div className='feature-prices'>
											<p className='feature-price'>$499</p>
											<s>$599</s>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
			</section>
		</div>
	)
}

export default Feature
