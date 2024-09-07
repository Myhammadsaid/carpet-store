import { FC } from 'react'
import img1 from '../assets/content-img1.png'
import img2 from '../assets/content-img2.png'
import img3 from '../assets/content-img3.png'

const Advertising: FC = () => {
	return (
		<div>
			<section className='advertising'>
				<div className='container'>
					<div className='advertising-cards'>
						<div className='advertising-card'>
							<img src={img1} alt='advertisingImg' />
							<h3 className='advertising-text'>FREE SHIPPING</h3>
							<p className='advertising-par'>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry.
							</p>
						</div>
						<div className='advertising-card'>
							<img src={img2} alt='advertisingImg' />
							<h3 className='advertising-text'>100% REFUND</h3>
							<p className='advertising-par'>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry.
							</p>
						</div>
						<div className='advertising-card'>
							<img src={img3} alt='advertisingImg' />
							<h3 className='advertising-text'>SUPPORT 24/7</h3>
							<p className='advertising-par'>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Advertising
