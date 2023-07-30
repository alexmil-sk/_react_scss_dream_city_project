import { Suspense } from "react";
import "./PostItemPage.scss";
import { Link, useLoaderData, useAsyncValue, Await } from "react-router-dom";

function Post() {

	const post = useAsyncValue();

	return (<div>
		<h1>title: {post.title}</h1>
		<h2>UserId: {post.userId}</h2>
		<h3>id: {post.id}</h3>
		<p>body: {post.body}</p>
	</div>)
}


function PostItemPage() {

	const { post, id } = useLoaderData();

	return (
		<div className="post-id__wrapper">
			<div className="post-id__content">
				<h1>Post Item Page - {id}</h1>
				<Suspense fallback={<h1 style={{backgroundColor: 'yellow'}}>...Post is loading</h1>}>
					<Await resolve={post}>
						<Post />
					</Await>
				</Suspense>
				<Link to="/posts"><button name="list">To List of Posts</button></Link>
				<Link to={`/posts/${id}/edit`}><button name="edit">Edit</button></Link>
			</div>
		</div>
	)
}

async function getPostItem(id) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	return res.json();
}

export const loaderPostItem = async ({ params }) => {
	const id = params.id;

	return { post: getPostItem(id), id };

}

export default PostItemPage;