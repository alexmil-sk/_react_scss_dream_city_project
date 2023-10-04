import "./ObjectsPageRu.scss";
import { Suspense } from "react";
import { Link, useSearchParams, useLoaderData, Await, useAsyncValue, json } from "react-router-dom";
import SearchComponentRu from "/src/components/ru/SearchComponentRu/SearchComponentRu.jsx";
import { motion } from "framer-motion";
import { framerFallingDown } from "/src/js/animationFramerSettings.js";

const liMotionSettings = {
	hidden: {
		opacity: 1,
		x: -2000,
	},
	visible: (i) => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: i * 0.1,
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
			<motion.div key={obj.id} initial="hidden" animate="visible" variants={liMotionSettings} custom={i}>
				<div className="object-link">
					<div className="object-link__item">
						<Link to={`/ru/objects/${obj.id}`} className="object-link__item_btn">
							<span>Подробнее</span>
						</Link>
						<div className="object-link__item_text">
							<p>{obj.id} - {obj.operation_type}</p>
							<p>{obj.title}</p>
							<>Город: {obj.location}</>
						</div>
						<div className="object-link__item_image">
							{obj.foto.map((item, idx) => (
								<Link to={item} target="_blank" key={idx} rel="noreferrer">
									<img src={item} height="50" />
								</Link>
							))}
						</div>
						<span className="object-link__item_price">{obj.price}</span>
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
		<motion.div className="objects__list" initial={"hidden"} animate={"visible"} variants={framerFallingDown}>
			<div className="objects__list_wrapper">
				<h1>Перечень объектов недвижимости</h1>

				{/* <SEARCH BLOK> =============================== */}

				<SearchComponentRu titleQuery={titleQuery} objLocationQuery={objLocationQuery} />

				{/* </ SEARCH BLOK> =============================== */}

				<ul>
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
