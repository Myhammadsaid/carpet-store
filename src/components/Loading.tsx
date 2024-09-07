import { FC } from 'react'

const Loading: FC = () => {
	return (
		<div>
			<section className='loading'>
				<div className='container'>
					<div className='loading-cards'>
						{Array(8)
							.fill('')
							.map((_, inx) => (
								<div key={inx} className='loading-card'>
									<div className='loading-card-img'></div>
									<div className='loading-card-text'></div>
									<div className='loading-card-star'></div>
									<div className='loading-card-prices'></div>
								</div>
							))}
					</div>
				</div>
			</section>
		</div>
	)
}

export default Loading
