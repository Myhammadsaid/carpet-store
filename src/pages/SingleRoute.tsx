import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import Product from '../components/Product'
import ProductInformation from '../components/ProductInformation'
import Single from '../components/Single'
import {
	useGetDetailProductQuery,
	useGetProductsQuery,
} from '../context/api/productApi'

const SingleRoute: FC = () => {
	let { id } = useParams()
	let { data: products, isLoading } = useGetDetailProductQuery(id)
	let { data } = useGetProductsQuery([])

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div>
			<Single products={products} isLoading={isLoading} />
			<ProductInformation />
			{isLoading ? (
				<Loading />
			) : (
				<Product
					data={data}
					title={'RELATED PRODUCTS'}
					item={false}
					count={4}
				/>
			)}
		</div>
	)
}

export default SingleRoute
