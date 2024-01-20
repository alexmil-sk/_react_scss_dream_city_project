/* eslint-disable react/prop-types */

import SliderObjectCardItemComponent from "/src/components/SliderObjectCardItemComponent/SliderObjectCardItemComponent.jsx";
import { Suspense } from "react";
import "./ObjectCardItemPageRu.scss";
import { Link, useLoaderData, Await } from "react-router-dom";
import { motion } from "framer-motion";
import { framerFallingDown } from "/src/js/animationFramerSettings.js";
import double_arrow from "/svg/double_arrow.svg";

function ObjectCardItemPageRu() {
	const { objects, id } = useLoaderData();


	return (
		<motion.div
			className="ObjectCardItemPageRu"
			initial={"hidden"}
			animate={"visible"}
			variants={framerFallingDown}
			id="top"
		>
			<div className="card__wrapper">
				{/* ============================================= */}

				<div className="card__buttons">
					<Link to="/ru/home">
						<img src="/svg/home.svg" alt="/svg/home.svg"/>
					</Link>
					<Link to="/ru/objects">
						<img src="/svg/list.svg" alt="/svg/list.svg"/>
					</Link>
				</div>

				{/* ============================================= */}

				<SliderObjectCardItemComponent fotos={objects[id - 1].foto} />

				{/* ========Автофокусировка при загрузке страницы===================================== */}

				<input type="text" autoFocus style={{ height: "6px" }} />

				{/* ============================================= */}

				<div className="card__content">
					<div className="card__title">
						<h1>{objects[id - 1].title}</h1>
					</div>

					<div className="card__price">
						<p>{objects[id - 1].price}</p>
					</div>

					<div className="card__item">
						<Suspense fallback={<h1 style={{ backgroundColor: "yellow" }}>...Карточка объекта загружается</h1>}>
							<Await resolve={objects}>
								<ObjectItemData />
							</Await>
						</Suspense>
					</div>
					<Link
						to={`/ru/objects/${id}/fotos`}
						state={{objects: objects,  id: id}}>
						<div className="card__foto">
							<div className="card__foto_item">
								{objects[id - 1].foto
									.filter((_, idx) => idx < 5)
									.map((item, idx) => (
										<img src={item} key={idx} alt={item}/>
									))}
							</div>
							<div className="card__foto_button">
								<span>
									Все фото&nbsp;
									<img src={double_arrow} alt="double_arrow"/>
								</span>
							</div>
						</div>
					</Link>

					<div className="card__additions">
						<div className="card__additions_item">
							<h2>описание</h2>
							<p>{objects[id - 1].description_full}</p>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

function ObjectItemData() {
	const { objects, id } = useLoaderData();

	const { location, rooms, square, title, description_full, address, conditions, foto, operation_type, price } =
		objects[id - 1];

	return (
		<div className="card__item_data">
			<div className="data__info">
				<div className="data__info_block">
					<p>
						<span>Локация: &nbsp;</span>
						{location}
					</p>
					<p>
						<span>Адрес: &nbsp;</span> {address}
					</p>
					<p>
						<span>Комнат: &nbsp;</span>
						{rooms}
					</p>
				</div>
				<div className="data__info_block">
					<p>
						<span>Площадь: &nbsp;</span>
						{square}
					</p>
					<p>
						<span>Условия: &nbsp;</span>
						{conditions}
					</p>
					<p>
						<span>Код объекта: &nbsp;</span> {id}
					</p>
				</div>
			</div>
		</div>
	);
}

//============================================================

export default ObjectCardItemPageRu;
