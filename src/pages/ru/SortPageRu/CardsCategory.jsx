import { motion } from 'framer-motion';
import "/src/styles/index.scss";


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
			layout
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