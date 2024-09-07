import 'number-brm'
import { FC, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import {
	decrementCart,
	deleteAllCart,
	incrementCart,
	removeFromCart,
} from '../context/slice/cartSlice'
import Payment from './Payment'

const ProductCard: FC = () => {
	const carts = useSelector(s => s?.cart?.value)
	const [toggle, setToggle] = useState(false)
	const dispatch = useDispatch()

	const handleRemoveFromCart = itemId => {
		Swal.fire({
			title: 'Are you sure?',
			text: `Do you want to remove this item from the cart?`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, remove it!',
			cancelButtonText: 'Cancel',
		}).then(result => {
			if (result.isConfirmed) {
				dispatch(removeFromCart(itemId)) // Dispatching the action with item's id
				Swal.fire(
					'Deleted!',
					'The item has been removed from the cart.',
					'success'
				)
			}
		})
	}

	let totalPrice = carts?.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	)

	let cartItems = carts?.map(item => (
		<div className='cart-card' key={item.id}>
			<button
				className='cart-btn-delete'
				onClick={() => handleRemoveFromCart(item)}
			>
				<IoClose />
			</button>
			<img className='cart-img' src={item.image} width={150} alt='' />
			<p className='cart-text'>{item.title}</p>
			<b className='cart-text'>${(item.price * item.quantity)?.brm()}</b>
			<br />
			<div className='single-route-btns'>
				<button
					className='single-route-btns-dec'
					disabled={item.quantity <= 1}
					onClick={() => dispatch(decrementCart(item))}
				>
					-
				</button>
				<span className='single-route-btns-count'>{item.quantity}</span>
				<button
					className='single-route-btns-inc'
					onClick={() => dispatch(incrementCart(item))}
				>
					+
				</button>
			</div>
			<b className='cart-text'>${item.price}</b>
		</div>
	))

	return (
		<div>
			{carts.length ? (
				<section className='cart'>
					<div className='container'>
						<h3 className='massega-title cart-title'>
							<span>Home</span>/Cart
						</h3>
						<div className='cart-items'>
							<button
								className='remove-btn'
								onClick={() => dispatch(deleteAllCart())}
							>
								Remove All
							</button>
							<p className='cart-item'>PRODUCT</p>
							<p className='cart-item'>PRICE</p>
							<p className='cart-item'>QTY</p>
							<p className='cart-item'>UNIT PRICE</p>
						</div>
						<hr />
						<div className='cart-cards'>{cartItems}</div>
						<div className='total-style'>
							<form className='form-vaucher'>
								<input
									type='text'
									className='input-vaucher'
									placeholder='Voucher code'
								/>
								<button className='vaucher-btn'>Redeem</button>
							</form>
							<div className='total-content'>
								<div className='total-items'>
									<p className='total-item'>
										Subtotal <span>${totalPrice?.brm()}</span>
									</p>
									<p className='total-item'>
										Shipping fee <span>$20</span>
									</p>
									<p className='total-item'>
										Coupon <span>No</span>
									</p>
									<hr />
									<p className='total-item-title'>
										TOTAL <span>${totalPrice?.brm()}</span>
									</p>
									<button
										className='cart-btn'
										onClick={() => setToggle(!toggle)}
									>
										Check Out
									</button>
								</div>
							</div>
						</div>
						<Payment toggle={toggle} setToggle={setToggle} />
					</div>
				</section>
			) : (
				<h2 style={{ textAlign: 'center', margin: '20px 0' }}>
					There is nothing in the cart
				</h2>
			)}
		</div>
	)
}

export default ProductCard
