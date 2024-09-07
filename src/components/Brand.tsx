import { FC } from 'react'
import img2 from '../assets/Figma.png'
import img3 from '../assets/Kronos.png'
import img1 from '../assets/Nike.png'

const Brand: FC = () => {
	return (
		<div>
			<section className='brand'>
				<div className='container'>
					<h2 className='brand-title'>LATEST NEWS</h2>
					<div className='brand-cards'>
						<div className='brand-card'>
							<img src={img1} alt='brandImg' />
							<div className='brand-content'>
								<p className='brand-content-date'>01 Jan, 2015</p>
								<h3 className='brand-content-text'>Fashion Industry</h3>
								<p className='brand-content-par'>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry.
								</p>
							</div>
						</div>
						<div className='brand-card'>
							<img src={img2} alt='brandImg' />
							<div className='brand-content'>
								<p className='brand-content-date'>01 Jan, 2015</p>
								<h3 className='brand-content-text'>Best Design Tools</h3>
								<p className='brand-content-par'>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry.
								</p>
							</div>
						</div>
						<div className='brand-card'>
							<img src={img3} alt='brandImg' />
							<div className='brand-content'>
								<p className='brand-content-date'>01 Jan, 2015</p>
								<h3 className='brand-content-text'>HR Community</h3>
								<p className='brand-content-par'>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Brand
