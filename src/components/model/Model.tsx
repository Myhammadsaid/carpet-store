import { FC } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import './Model.scss'

interface IProps {
	setToggle: React.Dispatch<React.SetStateAction<boolean>>
	children: React.ReactNode
}

const Model: FC<IProps> = ({ children, setToggle }) => {
	return (
		<>
			<div className='model'>
				<IoCloseSharp
					onClick={() => setToggle(false)}
					className='model__icon'
				/>
				{children}
			</div>
			<div onClick={() => setToggle(false)} className='overflow'></div>
		</>
	)
}

export default Model
