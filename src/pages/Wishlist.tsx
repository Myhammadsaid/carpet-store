import { FC, useEffect } from 'react'
import Heart from '../components/Heart'
import { useGetProductsQuery } from '../context/api/productApi'

const Wishlist: FC = () => {
	let { isLoading } = useGetProductsQuery(false)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div>
			<Heart isLoading={isLoading} />
		</div>
	)
}

export default Wishlist
