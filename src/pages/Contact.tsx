import { FC, useEffect } from 'react'
import Massega from '../components/Messaga'

const Contact: FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div>
			<Massega />
		</div>
	)
}

export default Contact
