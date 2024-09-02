import { Route, Routes } from 'react-router-dom'
import Cart from './pages/cart/Cart'
import Dekor from './pages/dekor/Dekor'
import Home from './pages/home/Home'
import Layout from './pages/layout/Layout'
import SingleRoute from './pages/single-route/SingleRoute'
import Wishlist from './pages/wishlist/Wishlist'

function App(): JSX.Element {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/products/:id' element={<SingleRoute />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/wishlist' element={<Wishlist />} />
					<Route path='/dekor' element={<Dekor />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
