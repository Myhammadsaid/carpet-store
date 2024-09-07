import { FC, useState } from 'react'
import { useSelector } from 'react-redux'

const bot_token = '5999169255:AAH54VNMOYp-myaWZcewvHtbt78LAZUv6Ms'
const chat_id = '-4208163629'

let initialState = {
	fname: '',
	lname: '',
	comment: '',
}

const Massega: FC = () => {
	const carts = useSelector(s => s.cart.value)

	let [data, setData] = useState(initialState)
	const handleSubmit = e => {
		e.preventDefault()

		let text = 'Buyurtma%0A'

		text += `Ismi: ${data.fname} %0A`
		text += `Familyasi: ${data.lname} %0A`
		text += `Comment: ${data.comment} %0A%0A`

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
		<div>
			<section className='massega'>
				<div className='container'>
					<h3 className='massega-title'>
						<span>Home</span>/Contact Us
					</h3>
					<div className='massega-style'>
						<div className='massega-content1'>
							<h1 className='massega-content1-text'>get in touch</h1>
							<div className='massega-content1-box'>
								<p className='massega-content1-email'>contact@e-comm.ng</p>
								<p className='massega-content1-phone'>+234 4556 6665 34</p>
								<p className='massega-content1-comment'>
									20 Prince Hakerem Lekki Phase 1, Lagos .
								</p>
							</div>
						</div>
						<div className='massega-content2'>
							<form onSubmit={handleSubmit} className='massega-form'>
								<div className='massega-inputs'>
									<p className='massega-inputs-text'>Fullname</p>
									<input
										type='text'
										value={data.fname}
										required
										onChange={e =>
											setData(p => ({ ...p, fname: e.target.value }))
										}
										placeholder='James Doe'
										className='massega-input'
									/>
								</div>
								<div className='massega-inputs'>
									<p className='massega-inputs-text'>Email</p>
									<input
										type='email'
										value={data.lname}
										required
										onChange={e =>
											setData(p => ({ ...p, lname: e.target.value }))
										}
										placeholder='jamesdoe@gmail.com'
										className='massega-input'
									/>
								</div>
								<div className='massega-inputs'>
									<p className='massega-inputs-text'>Message</p>
									<textarea
										value={data.comment}
										required
										onChange={e =>
											setData(p => ({ ...p, comment: e.target.value }))
										}
										placeholder='Type your message'
										className='massega-textarea'
									/>
								</div>
								<button className='massega-btn' type='submit'>
									Send
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Massega
