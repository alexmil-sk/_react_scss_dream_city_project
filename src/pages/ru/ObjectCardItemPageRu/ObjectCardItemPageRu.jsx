import { getPostItem } from "/src/js/getPostItem.js";
import { getPostComments } from "/src/js/getPostComments.js";
import { Suspense } from "react";
import "./ObjectCardItemPageRu.scss";
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

function Comments() {
	const comments = useAsyncValue();

	return (<div>
		<h1>Comments</h1>
		{
			comments.map((comment, idx) => (
				<div key={idx}>
					<h3>email: {comment.email}</h3>
					<h4>name: {comment.name}</h4>
					<p>body: {comment.body}</p>
					<hr style={{ border: '1px solid gray', margin: '10px 0' }} />
				</div>
			))
		}
	</div>)
}


function PostItemPageRu() {

	const { post, comments, id } = useLoaderData();

	return (
		<div className="post-id__wrapper">
			<div className="post-id__content">
				<h1>Post Item Page - {id}</h1>
				<Suspense fallback={<h1 style={{ backgroundColor: 'yellow' }}>...Post is loading</h1>}>
					<Await resolve={post}>
						<Post />
					</Await>
				</Suspense>

				<Suspense fallback={<h1 style={{ backgroundColor: 'cyan' }}>...Comments are loading</h1>}>
					<Await resolve={comments}>
						<Comments />
					</Await>
				</Suspense>
				<Link to="/ru/posts"><button name="list">В каталог объектов</button></Link>
			</div>
		</div>
	)
}

//============================================================

export const loaderPostItem = async ({ params }) => {
	const id = params.id;

	return { post: await getPostItem(id), comments: getPostComments(id), id };
}

export default PostItemPageRu;