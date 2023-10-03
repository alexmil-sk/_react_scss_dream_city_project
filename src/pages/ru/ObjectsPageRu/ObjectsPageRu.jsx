import "./ObjectsPageRu.scss";
import { Suspense } from "react";
import { Link, useSearchParams, useLoaderData, Await, useAsyncValue, json } from "react-router-dom";
import SearchComponentRu from "/src/components/ru/SearchComponentRu/SearchComponentRu.jsx";
import { motion } from "framer-motion";
import { framerFallingDown } from "/src/js/animationFramerSettings.js";

const liMotionSettings = {
	hidden: {
		opacity: 0,
		x: -2000,
	},
	visible: (i) => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: i * 1,
			duration: 1.2,
			type: "just",
			ease: "linear",
		},
	}),
};

//========================================================================

function handlerMappingArrayPosts(objectsArray, titleQuery, startsLatest) {
	return objectsArray
		.filter((obj) => obj.title.toLowerCase().includes(titleQuery?.toLowerCase()) && obj.id >= startsLatest)
		.map((obj, i) => (
			<motion.div key={obj.id} initial="hidden" animate="visible" variants={liMotionSettings} custom={i}>
				<Link to={`/ru/objects/${obj.id}`}>
					<li style={{ listStyle: "square", lineHeight: 1.5, fontSize: "25px" }}>
						<p>
							{obj.id} - {obj.title} - ({obj.location}) - {obj.operation_type}
						</p>
						{
							obj.foto.map((item, idx) => (
								<img src={item} width="50" key={idx} />
							))
						}
					</li>
				</Link>
			</motion.div>
		));
}

//=========================================================================

function MapObjects() {
	const allObjects = useAsyncValue();
	const [searchParams] = useSearchParams();

	const titleQuery = searchParams.get("title") || "";
	const checkboxLatest = searchParams.has("latest") || "";
	const startsLatest = checkboxLatest ? 3 : 1;

	return handlerMappingArrayPosts(allObjects, titleQuery, startsLatest);
}

//==================================================================

function FilterObjects() {
	const allObjects = useAsyncValue();
	const [searchParams] = useSearchParams();

	const titleQuery = searchParams.get("title") || "";
	const objIdQuery = searchParams.get("objId") || "";
	const checkboxLatest = searchParams.has("latest") || "";
	const startsLatest = checkboxLatest ? 3 : 1;

	const newArray = allObjects.filter((obj) => obj.id == objIdQuery);

	return handlerMappingArrayPosts(newArray, titleQuery, startsLatest);
}

//==================================================================

function ObjectsPageRu() {
	const { allObjects } = useLoaderData();
	const [searchParams] = useSearchParams();

	const titleQuery = searchParams.get("title") || "";
	const objIdQuery = searchParams.get("objId") || "";
	const checkboxLatest = searchParams.has("latest") || "";
	//url.ru/posts?post=abc&data=...&latest

	return (
		<motion.div className="posts" initial={"hidden"} animate={"visible"} variants={framerFallingDown}>
			<div className="posts__wrapper">
				<h1>Перечень объектов</h1>

				{/* <SEARCH BLOK> =============================== */}

				<SearchComponentRu titleQuery={titleQuery} objIdQuery={objIdQuery} checkboxLatest={checkboxLatest} />

				{/* </ SEARCH BLOK> =============================== */}

				<ul>
					<Suspense
						fallback={
							<h1
								style={{
									backgroundColor: "yellow",
									margin: "20px 0",
								}}
							>
								Объекты загружаются...
							</h1>
						}
					>
						<Await resolve={allObjects}>{objIdQuery ? <FilterObjects /> : <MapObjects />}</Await>
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
