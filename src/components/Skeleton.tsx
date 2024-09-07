import { FC } from 'react'

const Skeleton: FC = () => {
	return (
		<div>
			<div className='container'>
				<div className='skeleton-style'>
					<div className='skeleton-images'>
						<div className='skeleton-img1'></div>
						<div className='skeleton-images-min-imgs'>
							<div className='skeleton-img2'></div>
							<div className='skeleton-img2'></div>
							<div className='skeleton-img2'></div>
							<div className='skeleton-img2'></div>
						</div>
					</div>
					<div className='skeleton-content'>
						<div className='skeleton-title'></div>
						<div className='skeleton-title'></div>
						<hr />
						<div className='skeleton-items'>
							<div className='skeleton-item'></div>
							<div className='skeleton-item'></div>
							<div className='skeleton-item'></div>
						</div>
						<hr />
						<div className='skeleton-btns'>
							<div className='skeleton-btn'></div>
							<div className='skeleton-btns2'>
								<div className='skeleton-btn3'></div>
								<div className='skeleton-btn3'></div>
							</div>
						</div>
					</div>
					<div className='skeleton-total'></div>
				</div>
			</div>
		</div>
	)
}

export default Skeleton
