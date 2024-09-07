import { FC } from 'react'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import footerImg from '../assets/footer-img.png'
import Icon from '../assets/header-Icon.svg'

const Footer: FC = () => {
	return (
		<div>
			<footer className='footer'>
				<div className='container'>
					<div className='footer-items'>
						<div className='footer-items-item'>
							<a href='#' className='footer-items-item-title'>
								<img src={Icon} alt='Icon' />
								E-Comm
							</a>
							<p className='footer-items-item-par'>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever.Since the 1500s, when an unknown printer.
							</p>
						</div>
						<div className='footer-items-item'>
							<a href='#' className='footer-items-item-title'>
								Follow Us
							</a>
							<p className='footer-items-item-par'>
								Since the 1500s, when an unknown printer took a galley of type
								and scrambled.
							</p>
							<div className='footer-items-item-icons'>
								<FaFacebookF />
								<FaTwitter />
							</div>
						</div>
						<div className='footer-items-item'>
							<a href='#' className='footer-items-item-title'>
								Contact Us
							</a>
							<p className='footer-items-item-par'>
								E-Comm , 4578 Marmora Road, Glasgow D04 89GR
							</p>
						</div>
					</div>
					<div className='footer-items'>
						<div className='footer-items-item-2'>
							<a href='#' className='footer-items-item-title'>
								Infomation
							</a>
							<p className='footer-items-item-par'>
								About Us Infomation Privacy Policy Terms & Conditions
							</p>
						</div>
						<div className='footer-items-item-2'>
							<a href='#' className='footer-items-item-title'>
								Service
							</a>
							<p className='footer-items-item-par'>
								About Us Infomation Privacy Policy Terms & Conditions
							</p>
						</div>
						<div className='footer-items-item-2'>
							<a href='#' className='footer-items-item-title'>
								My Account
							</a>
							<p className='footer-items-item-par'>
								About Us Infomation Privacy Policy Terms & Conditions
							</p>
						</div>
						<div className='footer-items-item-2'>
							<a href='#' className='footer-items-item-title'>
								Our Offers
							</a>
							<p className='footer-items-item-par'>
								About Us Infomation Privacy Policy Terms & Conditions
							</p>
						</div>
					</div>
					<img className='footer-img' src={footerImg} alt='footer-img' />
				</div>
			</footer>
		</div>
	)
}

export default Footer
