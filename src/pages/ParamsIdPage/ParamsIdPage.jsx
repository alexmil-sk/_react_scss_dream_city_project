import "./ParamsIdPage.scss";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";


function ParamsIdPage() {

	const [post, setPost] = useState({});
	const { id } = useParams();

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => res.json())
			.then(data => setPost(data))
	}, [id]);

	return (
		<div className="params-id__wrapper">
			<div className="params-id__content">
				<h1>ParamsIdPage - {id}</h1>
				<div>
					{
						post && (<>
							<h1>title: {post.title}</h1>
							<h2>UserId: {post.userId}</h2>
							<h3>id: {post.id}</h3>
							<p>body: {post.body}</p>
						</>)
					}
				</div>
				<Link to="/params"><h1>To List of Posts</h1></Link>
			</div>
		</div>
	)
}

export default ParamsIdPage;