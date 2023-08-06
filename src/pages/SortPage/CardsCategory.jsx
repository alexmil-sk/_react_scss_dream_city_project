import { motion } from 'framer-motion';
import "/src/styles/index.scss";


const btnStyle = {
	fontFamily: "AdventPro Regular",
	fontSize: '1.3rem',
	lineHeight: '1.2',
	color: '#000',
	border: '1px solid black',
	borderRadius: '5px',
	margin: '10px',
	outline: 'none',
	padding: '10px 20px',
	backgroundColor: '#f1f1f1',
	cursor: 'pointer',


}

function CardsCategory({ el }) {

	const cardsSettings = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				duration: .6
			}
		},
		exit: {
			opacity: 0,
			transition: {
				duration: .6
			}
		}
	}

	return (
		<motion.div
			className="list__item"
			initial='hidden'
			animate='visible'
			exit='exit'
			variants={cardsSettings}
		>
			{el.title}
		</motion.div>
	)
}

export default CardsCategory;