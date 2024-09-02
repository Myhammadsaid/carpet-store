import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import CartEmpty from '../../components/cartEmpty/CartEmpty'
import Product from '../../components/product/Product'
import ProductCart from '../../components/productCart/ProductCart'
import { useGetProductsQuery } from '../../context/api/productApi'

const Cart: FC = () => {
	const { data, isLoading } = useGetProductsQuery([])
	const cart = useSelector((state: any) => state?.cart?.value?.length)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			{cart ? (
				<>
					<ProductCart />
					<Product data={data} title={'Рекомендуем'} isLoading={isLoading} />
				</>
			) : (
				<CartEmpty />
			)}
		</>
	)
}

export default Cart
