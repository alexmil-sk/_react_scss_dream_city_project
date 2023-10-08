/* eslint-disable react/prop-types */
import SliderObjectCardItemComponent from "/src/components/SliderObjectCardItemComponent/SliderObjectCardItemComponent.jsx";
import { getObjectsArray } from "/src/js/getObjectsArray.js";
import { Suspense } from "react";
import "./ObjectCardItemPageRu.scss";
import { Link, useLoaderData, Await } from "react-router-dom";
import { motion } from "framer-motion";
import { framerFallingDown } from "/src/js/animationFramerSettings.js";

function ObjectCardItemPageRu() {
	const { objects, id } = useLoaderData();

	return (
		<motion.div className="card" initial={"hidden"} animate={"visible"} variants={framerFallingDown} id="top">
			<div className="card__wrapper">
				{/* ============================================= */}

				<div className="card__buttons">
					<Link to="/ru/home">
						<img src="/icons/home.svg" />
					</Link>
					<Link to="/ru/objects">
						<img src="/icons/list.svg" />
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
					<div className="card__foto">
						{
							objects[id-1].foto.map((item, idx) => (
								<img src={item} key={ idx} />
							))
						}
					</div>
					<div className="card__additions">
						<div className="card__additions_item">
							<h2>описание</h2>
							<p>{objects[id - 1].description_full}</p>
						</div>
						<div className="card__additions_item">
							<h2>описание</h2>
							<p>
								This sunny apartment consists of entrance hall, open-plan living room and kitchen with a view of Bratislava
								castle, a bedroom and two other separate bedrooms, bathroom with bath, shower and toilet, separate toilet and
								terrace with an area of 12 m2.
							</p>
						</div>
						<div className="card__additions_item">
							<h2>описание</h2>
							<p>
								This sunny apartment consists of entrance hall, open-plan living room and kitchen with a view of Bratislava
								castle, a bedroom and two other separate bedrooms, bathroom with bath, shower and toilet, separate toilet and
								terrace with an area of 12 m2.
							</p>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

function ObjectItemData() {
	const { objects, id } = useLoaderData();

	const { location, rooms, square, title, description_full, address, conditions, foto, operation_type, price } = objects[id - 1];

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

export const loaderPostItem = async ({ params }) => {
	const id = params.id;

	return { objects: await getObjectsArray(), id };
};

export default ObjectCardItemPageRu;
