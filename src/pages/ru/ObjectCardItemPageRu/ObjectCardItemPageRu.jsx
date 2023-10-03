/* eslint-disable react/prop-types */
import { getObjectsArray } from "/src/js/getObjectsArray.js";
import { Suspense } from "react";
import "./ObjectCardItemPageRu.scss";
import { Link, useLoaderData, useAsyncValue, Await } from "react-router-dom";

function ObjectItemData() {
	const { objects, id } = useLoaderData();

	return (
		<div>
			<h1>title: {objects[id-1].title}</h1>
			<h2>Location: {objects[id-1].location}</h2>
			<h3>id: {objects[id-1].id}</h3>
			<p>desc: {objects[id-1].description_short}</p>
		</div>
	);
}

function ObjectCardItemPageRu() {
	const { objects, id } = useLoaderData();

	return (
		<div className="post-id__wrapper">
			<div className="post-id__content">
				<h1>карточка объекта - {id}</h1>
				<Suspense fallback={<h1 style={{ backgroundColor: "yellow" }}>...Карточка объекта загружается</h1>}>
					<Await resolve={objects}>
						<ObjectItemData />
					</Await>
				</Suspense>
				<Link to="/ru/objects">
					<button name="list">В каталог объектов</button>
				</Link>
				<Link to="/ru/home">
					<button name="list">На домашнюю страницу</button>
				</Link>
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
