import { FC } from 'react'
import img from '../assets/shoes.png'

const Content: FC = () => {
	return (
		<div>
			<section className='content'>
				<div className='container'>
					<div className='content-style'>
						<div className='content-box'>
							<h1 className='content-box-text'>Adidas Men Running Sneakers</h1>
							<p className='content-box-par'>
								Performance and design. Taken right to the edge.
							</p>
							<button className='content-box-btn'>SHOP NOW</button>
						</div>
						<img src={img} alt='content-img' />
					</div>
				</div>
			</section>
		</div>
	)
}

export default Content
