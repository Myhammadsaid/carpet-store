// import { useEffect, useState } from 'react'
// import { useTranslation } from 'react-i18next'
import { FaRegHeart, FaRegUser } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
// import { IoMdArrowDropdown } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import headerIcon from '../assets/header-Icon.svg'
// import '../i18n'

const Header = () => {
	// const [lang, setLang] = useState(localStorage.getItem('i18nextLng') || 'ru')
	// const { t, i18n } = useTranslation()

	// useEffect(() => {
	// 	i18n.changeLanguage(lang)
	// }, [lang])

	const cartItems = useSelector(state => state.cart.value.length)
	const heartItems = useSelector(s => s.heart.value.length)

	return (
		<div>
			<header>
				<div className='container'>
					<section className='header-top'>
						<nav className='header-top-nav'>
							{/* <div className='header-top-nav-item1'>
								<select
									className='header-top-language'
									value={lang}
									onChange={e => setLang(e.target.value)}
									name=''
									id=''
								>
									<option value='en'>EN</option>
									<option value='ru'>RU</option>
								</select>
								<h3 className='header-top-language'>
									USD <IoMdArrowDropdown />
								</h3>
							</div> */}
							<div className='header-top-nav-item2'>
								<NavLink to={'/register'}>
									<FaRegUser className='icon' />
								</NavLink>
								<NavLink to={'/wishlist'}>
									<FaRegHeart className='icon' />
								</NavLink>
								<NavLink to={'/cart'}>
									<FiShoppingCart className='icon' />
								</NavLink>
								<p className='header-top-nav-item2-text'>Items</p>
								<p className='header-top-nav-item2-price'>$0.00</p>
								<IoSearch className='icon' />
								<p className='header-top-nav-item2-cart-counter'>{cartItems}</p>
								<p className='header-top-nav-item2-cart-counter counter2'>
									{heartItems}
								</p>
							</div>
						</nav>
					</section>
					<hr />
					<section className='header-bottom'>
						<nav className='header-bottom-nav'>
							<NavLink to={'/'}>
								<div className='header-bottom-nav-titles'>
									<img src={headerIcon} alt='headerIcon' />
									<p className='header-bottom-nav-titles-title'>E-Comm</p>
								</div>
							</NavLink>
							<div className='header-bottom-nav-links'>
								<NavLink className='header-bottom-nav-links-link' to={'/'}>
									{/* {t('headerItems.HOME')} */}
									HOME
								</NavLink>
								<a className='header-bottom-nav-links-link'>BAGS</a>
								<a className='header-bottom-nav-links-link'>SNEAKERS</a>
								<a className='header-bottom-nav-links-link'>BELT</a>
								<NavLink
									className='header-bottom-nav-links-link'
									to={'/contact'}
								>
									CONTACT
								</NavLink>
							</div>
						</nav>
					</section>
				</div>
			</header>
		</div>
	)
}

export default Header
