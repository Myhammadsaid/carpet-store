import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../components/product/Product'
import SingleInfo from '../../components/singleInfo/SingleInfo'
import {
	useGetDetailProductQuery,
	useGetProductsQuery,
} from '../../context/api/productApi'

const SingleRoute: FC = () => {
	let { id } = useParams()
	let { data } = useGetDetailProductQuery(id)
	let { data: product, isLoading } = useGetProductsQuery([])

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<SingleInfo data={data} />
			<Product
				data={product}
				title={'Вам может понравиться'}
				isLoading={isLoading}
			/>
		</>
	)
}

export default SingleRoute
