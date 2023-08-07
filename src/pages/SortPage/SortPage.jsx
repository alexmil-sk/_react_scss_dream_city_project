import "./SortPage.scss";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ButtonCategory from "./ButtonCategory.jsx";
import CardsCategory from "./CardsCategory.jsx";
import { data } from "./data.js";

function SortPage() {

	const [cards, setCards] = useState(data?.filter(el => el.category === '1 комн. кв.'));
	const [selected, setSelected] = useState("1 комн. кв.");

	const buttons = data.reduce((acc, el) => {
		if (acc.includes(el.category)) return acc;

		return [...acc, el.category];
	}, []);

	function handleCards(selector) {
		setCards(data.filter(el => el.category === selector));
		setSelected(selector);
	}


	return (
		<div className="sort">
			<div className="sort__container">
				<div className="sort__wrapper">
					<h1>Sort Page</h1>
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
							<div className="list__container">
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
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}

export default SortPage;