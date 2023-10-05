/* eslint-disable react/prop-types */
import { getObjectsArray } from "/src/js/getObjectsArray.js";
import { Suspense } from "react";
import "./ObjectCardItemPageRu.scss";
import { Link, useLoaderData, Await } from "react-router-dom";
import { motion } from "framer-motion";
import { framerFallingDown } from "/src/js/animationFramerSettings.js";



function ObjectItemData() {
	const { objects, id} = useLoaderData();
	
	const { location, rooms, title, description_full, address, conditions, foto, operation_type, price } = objects[id - 1];;

	return (
		<div className="card__item_content">
			<div className="object__info">
				<h2> {title}</h2>
				<h2>Адрес: {location}</h2>
				<h3>id: {id}</h3>
				<p>desc: {description_full}</p>
			</div>
			<div className="object__descr">
				{
					//foto.map()
				}
			</div>
		</div>
	);
}

function ObjectCardItemPageRu() {
	const { objects, id } = useLoaderData();

	return (
		<motion.div className="card" initial={"hidden"} animate={"visible"} variants={framerFallingDown}>
			<div className="card__wrapper">
				<div className="card__title">
					<h1>{objects[id - 1].title}</h1>
				</div>

				<div className="card__item">
					<Suspense fallback={<h1 style={{ backgroundColor: "yellow" }}>...Карточка объекта загружается</h1>}>
						<Await resolve={objects}>
							<ObjectItemData />
						</Await>
					</Suspense>
				</div>
				<Link to="/ru/objects">
					<span name="list">В каталог объектов</span>
				</Link>
				<Link to="/ru/home">
					<span name="list">На домашнюю страницу</span>
				</Link>
			</div>
		</motion.div>
	);
}

//============================================================

export const loaderPostItem = async ({ params }) => {
	const id = params.id;

	return { objects: await getObjectsArray(), id };
};

export default ObjectCardItemPageRu;
