import { useEffect, useState } from 'react'
import { BsCart } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { FaRegHeart } from 'react-icons/fa'
import { FaRegCircleUser } from 'react-icons/fa6'
import { FiMenu } from 'react-icons/fi'
import { IoLocationOutline } from 'react-icons/io5'
import { MdClose } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { useGetProductsQuery } from '../../context/api/productApi'
import Model from '../model/Model'
import Search from '../search/Search'
import './Header.scss'

type TData = {
	id: number
	title: string
}

let headerdata: TData[] = [
	{
		id: 1,
		title: 'Алматы',
	},
	{
		id: 2,
		title: 'Жанаозен',
	},
	{
		id: 3,
		title: 'Кызылорда',
	},
	{
		id: 4,
		title: 'Тараз',
	},
	{
		id: 5,
		title: 'Нур-Султан',
	},
	{
		id: 6,
		title: 'Жаркент',
	},
	{
		id: 7,
		title: 'Лисаковск',
	},
	{
		id: 8,
		title: 'Текели',
	},
	{
		id: 9,
		title: 'Аксай',
	},
	{
		id: 10,
		title: 'Жезказган',
	},
	{
		id: 11,
		title: 'Павлодар',
	},
	{
		id: 12,
		title: 'Темиртау',
	},
	{
		id: 13,
		title: 'Аксу',
	},
	{
		id: 14,
		title: 'Жетысай',
	},
	{
		id: 15,
		title: 'Петропавловск',
	},
	{
		id: 16,
		title: 'Туркестан',
	},
]

interface IProduct {
	id: number
	title: string
	price: number
	img: string
	size: number
	quantity: number
}

const Header = () => {
	const [toggle, setToggle] = useState<boolean>(false)
	const [fromTitle, setFromTitle] = useState<string>('Алматы')
	const { data } = useGetProductsQuery([])
	const [navbarToggle, setNavbarToggle] = useState<boolean>(false)
	const [searchValue, setSearchValue] = useState<string>('')
	const [filterData, setFilterData] = useState(data)

	useEffect(() => {
		if (data) {
			setFilterData(
				data.filter((product: IProduct) =>
					product.title.toLowerCase().includes(searchValue.trim().toLowerCase())
				)
			)
		}
	}, [searchValue, data])

	let fromItems = headerdata.map((el: TData) => (
		<li
			onClick={() => {
				setFromTitle(el.title)
				localStorage.setItem('from', fromTitle)
			}}
			key={el.id}
		>
			{el.title}
		</li>
	))

	return (
		<>
			<header>
				<div className='container'>
					<nav>
						<NavLink to={'/'}>
							<img src={logo} alt='Logo' />
						</NavLink>
						<div onClick={() => setToggle(!toggle)} className='from'>
							<IoLocationOutline />
							<p>{localStorage.getItem('from') || 'Алматы'}</p>
						</div>
						<form className='header__form form__none'>
							<input
								value={searchValue}
								onChange={e => setSearchValue(e.target.value)}
								type='search'
								placeholder='Поиск по товарам'
							/>
							<CiSearch />
							<Search
								width={'100%'}
								filterData={filterData}
								searchValue={searchValue}
							/>
						</form>
						<div
							className={`nav__items ${navbarToggle ? 'active' : ''}`}
							id='responsive__navbar'
						>
							<NavLink to={'/'}>
								<FaRegCircleUser className='icon' />
								<span className='nav__item__none'>User</span>
							</NavLink>
							<NavLink onClick={() => setNavbarToggle(false)} to={'/wishlist'}>
								<FaRegHeart className='icon' />
								<span className='nav__item__none'>Heart</span>
							</NavLink>
							<NavLink onClick={() => setNavbarToggle(false)} to={'/cart'}>
								<BsCart className='icon' />
								<span className='nav__item__none'>Cart</span>
							</NavLink>
							<div
								onClick={() => setToggle(!toggle)}
								className='from display__none'
							>
								<IoLocationOutline />
								<p>{localStorage.getItem('from') || 'Алматы'}</p>
							</div>
						</div>
						<button
							className='navbar__btn'
							onClick={() => setNavbarToggle(!navbarToggle)}
						>
							{navbarToggle ? <MdClose /> : <FiMenu />}
						</button>
					</nav>
					<form className='header__form form__none2'>
						<input
							value={searchValue}
							onChange={e => setSearchValue(e.target.value)}
							type='search'
							placeholder='Поиск по товарам'
						/>
						<CiSearch />
						<Search
							width={'100%'}
							filterData={filterData}
							searchValue={searchValue}
						/>
					</form>
				</div>
			</header>
			{navbarToggle ? (
				<div
					onClick={() => setNavbarToggle(false)}
					className='overflow__navbar'
				></div>
			) : (
				<></>
			)}
			{toggle ? (
				<Model setToggle={setToggle}>
					<div className='from'>
						<h1 className='from__title'>Выберите ваш город</h1>
						<form className='header__form'>
							<input type='search' placeholder='Найти город' />
							<CiSearch />
						</form>
						<div className='from__items'>{fromItems}</div>
					</div>
				</Model>
			) : (
				<></>
			)}
		</>
	)
}

export default Header
