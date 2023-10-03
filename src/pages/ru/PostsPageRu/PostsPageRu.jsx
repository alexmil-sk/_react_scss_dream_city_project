import "./PostsPageRu.scss";
import { Suspense } from "react";
import { Link, useSearchParams, useLoaderData, Await, useAsyncValue, json } from "react-router-dom";
import SearchComponentRu from "/src/components/ru/SearchComponentRu/SearchComponentRu.jsx";
import { motion } from "framer-motion";
import { framerFallingDown } from "/src/js/animationFramerSettings.js";


const liMotionSettings = {
	hidden: {
		opacity: 0,
		x: -2000
	},
	visible: i => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: i * 0.05,
			duration: 1.2,
			type: 'just',
			ease: 'linear'
		}
	})
}


//========================================================================

function handlerMappingArrayPosts(array, titleQuery, startsLatest) {
	return (
		array
			.filter(post => post.title.includes(titleQuery?.toLowerCase()) && post.id >= startsLatest)
			.map((post, i) => (
				<motion.div
					key={post.id}
					initial='hidden'
					animate='visible'
					variants={liMotionSettings}
					custom={i}
				>
					<Link to={`/ru/posts/${post.id}`} >
						<li
							style={{ listStyle: 'square', lineHeight: 1.5, fontSize: '25px' }}
						>
							{post.userId}.{post.id} - {post.body}
						</li>
					</Link>
				</motion.div>
			))
	)
}

//=========================================================================

function MapPosts() {

	const posts = useAsyncValue();
	const [searchParams, ] = useSearchParams();

	const titleQuery = searchParams.get('title') || "";
	const checkboxLatest = searchParams.has('latest') || "";
	const startsLatest = checkboxLatest ? 80 : 1;

	return handlerMappingArrayPosts(posts, titleQuery, startsLatest)
}

//==================================================================

function FilterPosts() {

	const posts = useAsyncValue();
	const [searchParams, ] = useSearchParams();

	const titleQuery = searchParams.get('title') || "";
	const postIdQuery = searchParams.get('postId') || "";
	const checkboxLatest = searchParams.has('latest') || "";
	const startsLatest = checkboxLatest ? 80 : 1;

	const newArray = posts.filter(post => post.id == postIdQuery)

	return handlerMappingArrayPosts(newArray, titleQuery, startsLatest)
}

//==================================================================


function PostsPageRu() {

	const { posts } = useLoaderData();
	const [searchParams, ] = useSearchParams();

	const titleQuery = searchParams.get('title') || "";
	const postIdQuery = searchParams.get('postId') || "";
	const checkboxLatest = searchParams.has('latest') || "";
	//url.ru/posts?post=abc&data=...&latest

	return (
		<motion.div
			className="posts"
			initial={'hidden'}
			animate={'visible'}
			variants={framerFallingDown}
		>
			<div className="posts__wrapper">
				<h1>Posts Page</h1>

				{/* <SEARCH BLOK> =============================== */}

				<SearchComponentRu
					titleQuery={titleQuery}
					postIdQuery={postIdQuery}
					checkboxLatest={checkboxLatest}
				/>

				{/* </ SEARCH BLOK> =============================== */}

				<Link to="new">
					<button
						style={{
							padding: '5px 15px',
							border: '1px solid #000',
							fontSize: '1.5rem',
							background: 'green',
							color: '#fff',
							margin: '20px 0'
						}}
					>
						new Post
					</button>
				</Link>
				<ul>
					<Suspense
						fallback={
							<h1
								style={{
									backgroundColor: 'yellow',
									margin: "20px 0"
								}}>
								Posts are loading...
							</h1>
						}
					>
						<Await resolve={posts}	>
							{
								postIdQuery
									? <FilterPosts />
									: <MapPosts />
							}
						</Await>
					</Suspense>
				</ul>
			</div>
		</motion.div>

	)
}

//==========================================================================

async function getPosts() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');

	if (!res.ok) {
		throw new Response('Not Found', { status: res.status, statusText: res.statusText })
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


	return { posts: getPosts() };
}

export default PostsPageRu;