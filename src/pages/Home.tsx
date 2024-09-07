import { FC } from 'react'
import Advertising from '../components/Advertising'
import Brand from '../components/Brand'
import Content from '../components/Content'
import Feature from '../components/Feature'
import Hero from '../components/Hero'
import Product from '../components/Product'
import ProductBox from '../components/ProductBox'

const Home: FC = () => {
	return (
		<div>
			<Hero />
			<ProductBox />
			<Product title={'BEST SELLER'} item={true} count={8} />
			<Content />
			<Advertising />
			<Brand />
			<Feature />
		</div>
	)
}

export default Home
