import "./ContactsPageRu.scss";
import CastomLink from "/src/UI/CastomLinkUI/CastomLinkUI.jsx";
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion"
import { framerFallingDown } from "/src/js/animationFramerSettings.js";


function ContactsPageRu() {

	const titleMotionSettings = {
		hidden: {
			y: -500
		},
		visible: {
			y: 0,
			transition: {
				delay: 0.5,
				duration: 1.5,
				type: 'just',
				ease: 'linear'
			}
		}
	}

	const textMotionSettings = {
		hidden: {
			x: -2000
		},
		visible: {
			x: 0,
			transition: {
				delay: 2,
				duration: 1,
				type: 'just',
				ease: 'linear'
			}
		}
	}

	const hrMotionSettings = {
		hidden: {
			x: -2000
		},
		visible: {
			x: 0,
			transition: {
				delay: 3.5,
				duration: 1,
				type: 'just',
				ease: 'linear'
			}
		}
	}

	const ulMotionSettings = {
		hidden: {
			x: -1000
		},
		visible: {
			x: 0,
			transition: {
				delay: 4,
				duration: 1.5,
				type: 'just',
				ease: 'linear'
			}
		}
	}

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
					Contacts
				</motion.div>

				<motion.div
					className="text"
					initial='hidden'
					animate='visible'
					variants={textMotionSettings}
				>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore ipsa hic, expedita doloribus amet nesciunt debitis ad soluta earum corporis quam nihil illum voluptates tenetur possimus nulla culpa repellendus suscipit non quod! Quos assumenda asperiores quas exercitationem vel animi nesciunt, ducimus eum. Veniam magnam aperiam aliquam impedit! Molestiae vero dignissimos quia. Ipsam fuga voluptatum ducimus, sed facere error itaque nulla totam quo soluta officiis quam natus expedita dicta et eius numquam doloremque. Perferendis nam fugit neque dolorem commodi enim. Tenetur suscipit asperiores incidunt tempora maxime, quis, voluptatum sed fugit ad nihil nulla voluptas ex vel, error laudantium et voluptatem modi.</p>
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