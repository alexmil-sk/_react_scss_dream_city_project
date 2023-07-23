import { useState, useEffect } from "react";
import "./ParamsPage.scss";
import { Link } from "react-router-dom";

function ParamsPage() {

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(data => setPosts(data))
	}, []);

	return (
		<div className="params__wrapper">
			<h1>ParamsPage</h1>
			<ul>
				{
					posts?.map(post => (
						<Link to={`/params/${post.id}`} key={post.id}>
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

export default ParamsPage;

