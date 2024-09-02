import { FC } from 'react'
import Hero from '../../components/hero/Hero'
import Product from '../../components/product/Product'
import { useGetProductsQuery } from '../../context/api/productApi'

const Home: FC = () => {
	const { data, isLoading } = useGetProductsQuery([])

	return (
		<div>
			<Hero />
			<Product data={data} title={'Продукты'} isLoading={isLoading} />
		</div>
	)
}

export default Home
