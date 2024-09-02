import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const Layout: FC = () => {
	return (
		<div>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default Layout
