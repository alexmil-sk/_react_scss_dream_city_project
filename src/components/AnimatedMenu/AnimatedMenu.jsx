import { useState } from "react";
import { motion, AnimateSharedLayout } from 'framer-motion';
import "./AnimateMenu.scss";

const menuElements = ['MenuShort', 'MenuTwooooooooooo', 'MenuItem Normal'];

function AnimatedMenu() {

	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className="animated-menu">
			<div className="menu__container">
				<div className="menu__wrapper">
					{
						menuElements.map((item, idx) => (
							<MenuItem
								key={item}
								item={item}
								isSelected={activeIndex === idx}
								handleClick={() => setActiveIndex(idx)}
							/>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default AnimatedMenu;


function MenuItem(props) {
	const { item, isSelected, handleClick = Function.prototype } = props;

	return (
		<motion.div
			onClick={handleClick}
			style={{
				padding: '0 0.5rem',
				fontWeight: 900,
				position: 'relative',
				margin: '0 10px',
				textAlign: 'center',
				cursor: 'pointer'
			}}
			initial={{ color: '#000' }}
			animate={{ color: isSelected ? 'rgb(255, 0, 0)' : '#000' }}
			transition={{ duration: .3 }}
		>
			{isSelected && <MenuActiveLine />
}
			{item}
		</motion.div>
	)
}

function MenuActiveLine() {

	return (
		<motion.div
			layoutId="activeLine"
			style={{
				width: '100%',
				height: '4px',
				position: 'absolute',
				bottom: '-6px',
				backgroundColor: 'rgb(255, 0, 0)'
			}}
		></motion.div>
	)

}
