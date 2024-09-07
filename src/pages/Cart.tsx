import { FC, useEffect } from 'react'
import ProductCard from '../components/ProductCard'

const Cart: FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<ProductCard />
		</>
	)
}

export default Cart
