import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import './media.scss'
import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import SingleRoute from './pages/SingleRoute'
import Wishlist from './pages/Wishlist'

const App: FC = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/wishlist' element={<Wishlist />} />
				<Route path='/products/:id' element={<SingleRoute />} />
				<Route path='/register' element={<Login />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/' element={<Auth />}>
					<Route path='/admin' element={<Admin />} />
				</Route>
			</Routes>
			<Footer />
		</>
	)
}

export default App
