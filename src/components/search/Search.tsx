import { FC } from 'react'
import { Link } from 'react-router-dom'
import './Search.scss'

interface IProps {
	filterData: IProduct[]
	searchValue: string
	width: string
}

interface IProduct {
	id: number
	title: string
	price: number
	img: string
	size: number
	quantity: number
}
const Search: FC<IProps> = ({ filterData, searchValue, width }) => {
	let searchItem = filterData?.slice(0, 5)?.map((el: IProduct) => (
		<div key={el.id} className='search__content'>
			<img src={el.img} alt={el.title} />
			<Link to={`/products/${el.id}`}>{el.title}</Link>
		</div>
	))

	return (
		<>
			{searchValue.trim() ? (
				<div style={{ width: width }} className='search'>
					{searchItem}
				</div>
			) : (
				<></>
			)}
		</>
	)
}

export default Search
