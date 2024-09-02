import { FC } from 'react'
import { BiSolidMessage, BiSolidMessageRounded } from 'react-icons/bi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import './Footer.scss'

const Footer: FC = () => {
	return (
		<>
			<footer>
				<div className='container'>
					<div className='footer__items'>
						<ul className='footer__item'>
							<li className='footer__item__title'>Каталог товаров</li>
							<li className='footer__item__text'>Ковры</li>
							<li className='footer__item__text'>Коврики</li>
							<li className='footer__item__text'>Дорожки</li>
							<li className='footer__item__text'>Для ванной</li>
							<li className='footer__item__text'>Особенные ковры</li>
						</ul>
						<ul className='footer__item'>
							<li className='footer__item__title'>Личный кабинет</li>
							<li className='footer__item__text'>Личный кабинет</li>
							<li className='footer__item__text'>Мои заказы</li>
							<li className='footer__item__text'>Избранное</li>
						</ul>
						<ul className='footer__item'>
							<li className='footer__item__title'>Центр поддержки</li>
							<li className='footer__item__text'>Контакты</li>
							<li className='footer__item__text'>Доставка</li>
							<li className='footer__item__text'>Возвраты</li>
						</ul>
						<ul className='footer__item'>
							<li className='footer__item__title'>Помощь и контакты</li>
							<li className='footer__item__text'>
								<BsFillTelephoneFill />
								+7 775 657 66 76
							</li>
							<li className='footer__item__text'>
								<BiSolidMessage />
								info@kilem.kz
							</li>
							<li className='footer__item__text'>
								<BiSolidMessageRounded className='footer__item__text__icon' />
								<RiInstagramFill className='footer__item__text__icon' />
								<FaFacebook className='footer__item__text__icon' />
							</li>
						</ul>
						<ul className='footer__item'>
							<li className='footer__item__title'>Рассылка</li>
							<li className='footer__item__text'>
								Подпишитесь, чтобы всегда быть в курсе наших новый акций
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
