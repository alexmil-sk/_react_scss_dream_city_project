import { useState, useEffect } from "react";
import "./PostsPage.scss";
import { Link } from "react-router-dom";

function PostsPage() {

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(data => setPosts(data))
	}, []);

	return (
		<div className="params__wrapper">
			<h1>Posts Page</h1>
			<Link to="new"><button style={{padding: '5px 15px', border: '1px solid #000', fontSize: '1.5rem', background: 'green', color: '#fff' }}>new Post</button></Link>
			<ul>
				{
					posts?.map(post => (
						<Link to={`/posts/${post.id}`} key={post.id}>
							<li
								style={{ listStyle: 'square', lineHeight: 1.5, fontSize: '25px' }}
							>
								{post.userId}.{post.id} -{post.body}
							</li>
						</Link>
					))
				}
			</ul>

		</div>
	)
}

export default PostsPage;

