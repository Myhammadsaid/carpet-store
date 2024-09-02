import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import HeartEmpty from '../../components/heartEmpty/HeartEmpty'
import Product from '../../components/product/Product'
import { useGetProductsQuery } from '../../context/api/productApi'

const Wishlist: FC = () => {
	const { isLoading } = useGetProductsQuery([])
	const wishlist = useSelector((state: any) => state.wishlist.value)
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			{wishlist.length ? (
				<Product data={wishlist} title='Продукты' isLoading={isLoading} />
			) : (
				<HeartEmpty />
			)}
		</>
	)
}

export default Wishlist
