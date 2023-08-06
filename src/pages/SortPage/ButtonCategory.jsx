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

function ButtonCategory({ text, handleClick = Function.prototype }) {


	return (
		<motion.button
			style={btnStyle}
			whileHover={{ backgroundColor: '#ddd' }}
			whileTap={{ backgroundColor: '#ccc' }}
			onClick={handleClick}
		>
			{text}
		</motion.button>
	)
}

export default ButtonCategory;