import { FC, useEffect } from 'react'
import DekorOrder from '../../components/dekor-order/DekorOrder'

const Dekor: FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<DekorOrder />
		</>
	)
}

export default Dekor
