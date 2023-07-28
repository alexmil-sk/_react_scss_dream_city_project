import { useState, useEffect } from "react";
import "./PostsPage.scss";
import { Link, useSearchParams } from "react-router-dom";
import SearchComponent from "/src/components/Search/SearchComponent.jsx";


function PostsPage() {

	const [posts, setPosts] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();

	const titleQuery = searchParams.get('title') || "";
	const postIdQuery = searchParams.get('postId') || "";
	const checkboxLatest = searchParams.has('latest') || "";
	//url.ru/posts?post=abc&data=...&latest

	const startsLatest = checkboxLatest ? 80 : 1;

	function filterPosts(array) {
		const newArray = array.filter(post => post.id == postIdQuery)
		return mapPosts(newArray);
	}

	function mapPosts(array) {
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

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(data => setPosts(data))
	}, []);

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
					{
						postIdQuery
							? filterPosts(posts)
							: mapPosts(posts)
					}
				</ul>
			</div>
		</div>

	)
}

export { PostsPage };