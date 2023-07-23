import "./PostItemEditPage.scss";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";


function PostItemEditPage() {

	const [post, setPost] = useState({});
	const { id } = useParams();

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => res.json())
			.then(data => setPost(data))
	}, [id]);

	return (
		<div className="post-edit__wrapper">
			<div className="post-edit__content">
				<h1>Post Item Edit Page - {id}</h1>
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
				<Link to="/posts"><button name="list">To List of Posts</button></Link>
				<Link to={`/posts/${id}`}><button name="edit">Back</button></Link>
			</div>
		</div>
	)
}

export default PostItemEditPage;