import "./PostsPage.scss";
import { Suspense } from "react";
import { Link, useSearchParams, useLoaderData, Await, useAsyncValue } from "react-router-dom";
import SearchComponent from "/src/components/Search/SearchComponent.jsx";

//=========================================================================

function MapPosts() {

	const posts = useAsyncValue();
	const [searchParams, setSearchParams] = useSearchParams();

	const titleQuery = searchParams.get('title') || "";
	const checkboxLatest = searchParams.has('latest') || "";

	const startsLatest = checkboxLatest ? 80 : 1;

	function mapAllPosts(array) {
		return (
			array
				.filter(post => post.title.includes(titleQuery?.toLowerCase()) && post.id >= startsLatest)
				.map(post => (
					<Link to={`/posts/${post.id}`} key={post.id}>
						<li
							style={{ listStyle: 'square', lineHeight: 1.5, fontSize: '25px' }}
						>
							{post.userId}.{post.id} - {post.body}
						</li>
					</Link>
				))
		)
	}
	return mapAllPosts(posts);
}

//==================================================================

function FilterPosts() {

	const posts = useAsyncValue();
	const [searchParams, setSearchParams] = useSearchParams();

	const titleQuery = searchParams.get('title') || "";
	const postIdQuery = searchParams.get('postId') || "";
	const checkboxLatest = searchParams.has('latest') || "";

	const startsLatest = checkboxLatest ? 80 : 1;

	function filterAllPosts(array) {
		const newArray = array.filter(post => post.id == postIdQuery)
		return (
			newArray
				.filter(post => post.title.includes(titleQuery?.toLowerCase()) && post.id >= startsLatest)
				.map(post => (
					<Link to={`/posts/${post.id}`} key={post.id}>
						<li
							style={{ listStyle: 'square', lineHeight: 1.5, fontSize: '25px' }}
						>
							{post.userId}.{post.id} - {post.body}
						</li>
					</Link>
				))
		);
	}
	return filterAllPosts(posts)
}

//==================================================================


function PostsPage() {

	const { posts } = useLoaderData();
	const [searchParams, setSearchParams] = useSearchParams();

	const titleQuery = searchParams.get('title') || "";
	const postIdQuery = searchParams.get('postId') || "";
	const checkboxLatest = searchParams.has('latest') || "";
	//url.ru/posts?post=abc&data=...&latest

	return (
		<div className="posts">
			<div className="posts__wrapper">
				<h1>Posts Page</h1>

				{/* <SEARCH BLOK> =============================== */}

				<SearchComponent
					titleQuery={titleQuery}
					postIdQuery={postIdQuery}
					checkboxLatest={checkboxLatest}
				/>

				{/* </ SEARCH BLOK> =============================== */}

				<Link to="new">
					<button
						style={{ padding: '5px 15px', border: '1px solid #000', fontSize: '1.5rem', background: 'green', color: '#fff' }}
					>
						new Post
					</button>
				</Link>
				<ul>
					<Suspense fallback={<h1 style={{ backgroundColor: 'yellow', margin: "20px 0" }}>Posts are loading...</h1>}>
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
		</div>

	)
}

async function getPosts() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	return res.json();
}

export const loaderPosts = async () => {
	return { posts: getPosts() };
}

export default PostsPage;