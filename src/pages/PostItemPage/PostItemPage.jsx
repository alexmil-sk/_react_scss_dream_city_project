import "./PostItemPage.scss";
import { Link, useLoaderData } from "react-router-dom";


function PostItemPage() {

	const { post, id } = useLoaderData();

	return (
		<div className="post-id__wrapper">
			<div className="post-id__content">
				<h1>Post Item Page - {id}</h1>
				<div>
					<h1>title: {post.title}</h1>
					<h2>UserId: {post.userId}</h2>
					<h3>id: {post.id}</h3>
					<p>body: {post.body}</p>
				</div>
				<Link to="/posts"><button name="list">To List of Posts</button></Link>
				<Link to={`/posts/${id}/edit`}><button name="edit">Edit</button></Link>
			</div>
		</div>
	)
}

export const loaderPostItem = async ({ params }) => {
	const id = params.id;
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const post = await res.json();
	return { post, id };

}

export default PostItemPage;