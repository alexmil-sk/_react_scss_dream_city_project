import { useState } from "react";
import { motion } from 'framer-motion';
import "./AnimatedMenuRu.scss";

const menuElements = ['MenuShort', 'MenuTwooooooooooo', 'MenuItem Normal'];

//=================================================================================

function AnimatedMenuRu() {

	const [activeIndex, setActiveIndex] = useState(0);

	return (
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
	)
}

export default AnimatedMenuRu;

//=================================================================================

function MenuItem(props) {
	const { item, isSelected, handleClick = Function.prototype } = props;

	return (
		<motion.div
			onClick={handleClick}
			style={{
				fontWeight: 900,
				position: 'relative',
				margin: '0 1rem',
				textAlign: 'center',
				cursor: 'pointer'
			}}
			initial={{ color: '#000' }}
			animate={{ color: isSelected ? 'rgb(255, 0, 0)' : '#000' }}
			transition={{ duration: .3 }}
		>
			{item}

			{isSelected && <MenuActiveLine />}
		</motion.div>
	)
}

//=================================================================================

function MenuActiveLine() {

	return (
		<motion.div
			layoutId="activeLine"
			style={{
				width: 'calc(100% - 10px)',
				height: '4px',
				position: 'absolute',
				bottom: '-6px',
				left: '5px',
				backgroundColor: 'rgb(255,0,0)'
			}}
		></motion.div>
	)

}

//=================================================================================
