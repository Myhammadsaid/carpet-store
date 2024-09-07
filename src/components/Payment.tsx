import { FC, useState } from 'react'
import { CiBank } from 'react-icons/ci'
import { FiCreditCard } from 'react-icons/fi'
import { ImPaypal } from 'react-icons/im'
import { IoMdClose } from 'react-icons/io'
import { useSelector } from 'react-redux'

const bot_token = '5999169255:AAH54VNMOYp-myaWZcewvHtbt78LAZUv6Ms'
const chat_id = '-4208163629'

let initialState = {
	fname: '',
	lname: '',
	email: '',
	comment: '',
	phone: '',
}

const Payment: FC = ({ toggle, setToggle }) => {
	const carts = useSelector(s => s.cart.value)

	let [data, setData] = useState(initialState)
	const handleSubmit = e => {
		e.preventDefault()

		let text = 'Buyurtma%0A'

		text += `Ismi: ${data.fname} %0A`
		text += `Familyasi: ${data.lname} %0A`
		text += `Email: ${data.email} %0A`
		text += `Comment: ${data.comment} %0A%0A`
		text += `Phone: ${data.comment} %0A%0A`

		carts?.forEach(product => {
			text += `Nomi: ${product.title} %0A`
			text += `Miqdori: ${product.quantity} %0A`
			text += `Narxi: ${product.price}$ %0A%0A`
		})

		let url = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&text=${text}`

		let api = new XMLHttpRequest()
		api.open('GET', url, true)
		api.send()

		setData(initialState)
	}

	return (
		<>
			{toggle ? (
				<>
					<div
						className='payment-overlay'
						onClick={() => setToggle(!toggle)}
					></div>
					<div className='payment-wrapper'>
						<IoMdClose
							onClick={() => setToggle(!toggle)}
							color='#40BFFF'
							style={{ fontSize: '28px', cursor: 'pointer' }}
						/>
						<h3 className='payment-title'>Make Payment</h3>
						<form onSubmit={handleSubmit} className='payment-form'>
							<div className='payment-inputs'>
								<input
									type='text'
									value={data.fname}
									required
									onChange={e =>
										setData(p => ({ ...p, fname: e.target.value }))
									}
									placeholder='First Name'
									className='payment-input'
								/>
								<input
									type='text'
									value={data.lname}
									required
									onChange={e =>
										setData(p => ({ ...p, lname: e.target.value }))
									}
									placeholder='Last Name'
									className='payment-input'
								/>
							</div>
							<div className='payment-inputs'>
								<input
									type='text'
									value={data.email}
									required
									onChange={e =>
										setData(p => ({ ...p, email: e.target.value }))
									}
									placeholder='Email Address'
									className='payment-input'
								/>
								<textarea
									type='text'
									value={data.comment}
									required
									onChange={e =>
										setData(p => ({ ...p, comment: e.target.value }))
									}
									placeholder='Address for Delivery'
									className='payment-input'
								/>
							</div>
							<div className='payment-inputs'>
								<div className='payment-box'>
									<p className='payment-text'>Select Method of Payment</p>
									<div className='payment-checkbox'>
										<span>
											<FiCreditCard color='#40BFFF' />
											<p className='payment-par'>Credit Card Or Debit</p>
										</span>
										<input type='checkbox' className='payment-check' />
									</div>
									<div className='payment-checkbox'>
										<span>
											<ImPaypal color='#40BFFF' />
											<p className='payment-par'>Paypal</p>
										</span>
										<input type='checkbox' className='payment-check' />
									</div>
									<div className='payment-checkbox'>
										<span>
											<CiBank color='#40BFFF' />
											<p className='payment-par'>Bank Transfer</p>
										</span>
										<input type='checkbox' className='payment-check' />
									</div>
								</div>
								<input
									type='number'
									value={data.phone}
									required
									onChange={e =>
										setData(p => ({ ...p, phone: e.target.value }))
									}
									className='payment-input'
									placeholder='Mobile Phone'
								/>
							</div>
							<button className='payment-btn'>Go to Payment</button>
						</form>
					</div>
				</>
			) : (
				<></>
			)}
		</>
	)
}

export default Payment
