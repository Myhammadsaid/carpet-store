import { FC, useEffect } from 'react'
import AdminPanel from '../components/AdminPanel'

const Admin: FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div>
			<AdminPanel />
		</div>
	)
}

export default Admin
