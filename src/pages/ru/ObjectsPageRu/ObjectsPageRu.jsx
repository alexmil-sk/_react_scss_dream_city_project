import "./ObjectsPageRu.scss";
import { Suspense } from "react";
import { Link, useSearchParams, useLoaderData, Await, useAsyncValue, json } from "react-router-dom";
import SearchComponentRu from "/src/components/ru/SearchComponentRu/SearchComponentRu.jsx";
import { motion } from "framer-motion";
import { framerFallingDown } from "/src/js/animationFramerSettings.js";

import SliderObjectCardComponent from "/src/components/SliderObjectCardComponent/SliderObjectCardComponent.jsx";

const liMotionSettings = {
	hidden: {
		opacity: 1,
		x: -2000,
	},
	visible: (i) => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: i * 0.3,
			duration: 1.2,
			type: "just",
			ease: "linear",
		},
	}),
};

//========================================================================

function handlerMappingArrayPosts(objectsArray, titleQuery) {
	return objectsArray
		.filter((obj) => obj.title.toLowerCase().includes(titleQuery?.toLowerCase()))
		.map((obj, i) => (
			<motion.div
				key={obj.id}
				initial="hidden"
				animate="visible"
				variants={liMotionSettings}
				custom={i}
			>
				<div className="object-link">
					<div className="object-link__item">
						<div className="object-link__item_slider">
							<SliderObjectCardComponent foto={obj.foto} />
						</div>
						<div className="object-link__item_content">
							<div className="object-link__item_text">
								<div className="title">{obj.title}</div>
								<div className="price">
									Цена: <span>{obj.price}</span>
								</div>
								<div className="location">
									Локация: <span>{obj.location}</span>
								</div>
								<div className="address">
									Адрес: <span>{obj.address}</span>
								</div>
							</div>
							<div className="object-link__item_btn">
								<Link to={`/ru/objects/${obj.id}`}>
									<span>Подробнее</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		));
}

//=========================================================================

function MapObjects() {
	const allObjects = useAsyncValue();
	const [searchParams] = useSearchParams();

	const titleQuery = searchParams.get("title") || "";
	return handlerMappingArrayPosts(allObjects, titleQuery);
}

//==================================================================

function FilterObjects() {
	const allObjects = useAsyncValue();
	const [searchParams] = useSearchParams();

	const titleQuery = searchParams.get("title") || "";
	const objLocationQuery = searchParams.get("location") || "";

	const newArray = allObjects.filter((obj) => obj.location.toLowerCase().includes(objLocationQuery?.toLowerCase()));

	return handlerMappingArrayPosts(newArray, titleQuery);
}

//==================================================================

function ObjectsPageRu() {
	const { allObjects } = useLoaderData();
	const [searchParams] = useSearchParams();

	const titleQuery = searchParams.get("title") || "";
	const objLocationQuery = searchParams.get("location") || "";
	//url.ru/posts?post=abc&data=...&latest

	return (
		<motion.div
			className="objects__list"
			initial={"hidden"}
			animate={"visible"}
			variants={framerFallingDown}
		>
			<div className="objects__list_wrapper">
				<div className="objects__list_search">
					<h1>Перечень объектов недвижимости</h1>
					{/* <SEARCH BLOK> =============================== */}
					<SearchComponentRu titleQuery={titleQuery} objLocationQuery={objLocationQuery} />
					{/* </ SEARCH BLOK> =============================== */}
				</div>
				<div className="objects__list_container">
					<ul className="objects__list_cards">
						<Suspense
							fallback={
								<h1
									style={{
										backgroundColor: "#540d6e",
										margin: "20px 0",
									}}
								>
									Объекты загружаются...
								</h1>
							}
						>
							<Await resolve={allObjects}>{objLocationQuery ? <FilterObjects /> : <MapObjects />}</Await>
						</Suspense>
					</ul>
				</div>
			</div>
		</motion.div>
	);
}

//==========================================================================

async function getAllObjects() {
	//const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	//const res = await fetch('/src/db/ru/dbObjectCard.js');
	const res = await fetch("/src/db/ru/dbObjectCard.json");

	if (!res.ok) {
		throw new Response("Not Found", { status: res.status, statusText: res.statusText });
	}

	return res.json();
}

export const loaderPosts = async () => {
	//======================================================
	//const posts = await getPosts();

	// if (!posts.length) {
	// 	throw json(
	// 		{ message: "email is required", reason: "Wrong URL" },
	// 		{ status: 406, statusText: "JSON Status Text" }
	// 	);
	// }

	//return { posts };
	//======================================================

	return { allObjects: getAllObjects() };
};

export default ObjectsPageRu;
