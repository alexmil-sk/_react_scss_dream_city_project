import "./PostItemEditPage.scss";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import EditPost from "/src/components/EditPost/EditPost.jsx";


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
			<div className="post-edit__container">
				<h1>Post Item Edit Page - {id}</h1>
				<EditPost
					title={post.title}
					body={post.body}
				/>
				<div className="block__btn">
					<Link to="/posts"><button name="posts-list">To List of Posts</button></Link>
					<Link to={`/posts/${id}`}><button name="back">Back</button></Link>
				</div>
			</div>
		</div>
	)
}

export default PostItemEditPage;