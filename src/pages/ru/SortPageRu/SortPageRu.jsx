import "./SortPageRu.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ButtonCategory from "./ButtonCategory.jsx";
import CardsCategory from "./CardsCategory.jsx";
import { data } from "./data.js";
import { framerFallingDown } from "/src/js/animationFramerSettings.js";


function SortPageRu() {

	const [cards, setCards] = useState(data);
	const [selected, setSelected] = useState("ALL");

	const buttons = data.reduce((acc, el) => {
		if (acc.includes(el.category)) return acc;

		return [...acc, el.category];
	}, ['ALL']);

	function handleCards(selector) {
		if (selector === 'ALL') setCards(data);
		else setCards(data.filter(el => el.category === selector));
		
		setSelected(selector);
	}


	return (
		<motion.div
			className="sort"
			initial={'hidden'}
			animate={'visible'}
			variants={framerFallingDown}
		>
			<div className="sort__container">
				<div className="sort__wrapper">
					<h1>Сортировка по типу объектов</h1>
					{/* <AnimatedMenuRu /> */}
					<div className="categories__container">
						<div className="btns">
							<div className="btns__container">
								{
									buttons.map((btn) => (
										<ButtonCategory
											key={btn}
											text={btn}
											handleClick={() => handleCards(btn)}
											selected={selected}
										/>
									))
								}
							</div>
						</div>

						<div className="list">
							<motion.div
								layout
								className="list__container"
							>
								<AnimatePresence initial={false} mode="wait" >
									{
										cards.map(el => (
											<CardsCategory
												key={el.title}
												el={el}
											/>
										))
									}
								</AnimatePresence>
							</motion.div>
						</div>

					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default SortPageRu;