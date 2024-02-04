import "./ContactsPageRu.scss";
import CastomLink from "/src/UI/CastomLinkUI/CastomLinkUI.jsx";
import { Link, Outlet } from "react-router-dom";
import {motion} from "framer-motion"
import {
	framerFallingDown,
	hrMotionSettings,
	textMotionSettings,
	titleMotionSettings, ulMotionSettings
} from "/src/js/animationFramerSettings.js";


function ContactsPageRu() {

	return (
		<motion.div
			className="contacts"
			initial={'hidden'}
			animate={'visible'}
			variants={framerFallingDown}
		>
			<div className="contacts__container">
				<motion.div
					className="title"
					initial='hidden'
					animate='visible'
					variants={titleMotionSettings}
				>
					Контакты
				</motion.div>

				<motion.div
					className="text"
					initial="hidden"
					animate="visible"
					variants={textMotionSettings}
				>
					<h1>Телефоны:</h1>
					<h1>+380501063191</h1>
					<h1>+421950429286</h1>
					<h1>+421910513298</h1>

				</motion.div>

				<motion.hr
					style={{ borderBottom: '1px solid gray', margin: '20px' }}
					initial='hidden'
					animate='visible'
					variants={hrMotionSettings}
				/>

				<motion.ul
					initial='hidden'
					animate='visible'
					variants={ulMotionSettings}
				>
					<li><Link to="fotos">Наши Фото</Link></li>
					<li><Link to="team">Наша Команда</Link></li>
					<li><CastomLink to="/ru/home">На домашнюю страницу</CastomLink></li>
					<li><Link to="/ru/contacts">Закрыть вложенные страницы x</Link></li>
				</motion.ul>


				<Outlet />

			</div>
		</motion.div>
	)
}

export default ContactsPageRu;