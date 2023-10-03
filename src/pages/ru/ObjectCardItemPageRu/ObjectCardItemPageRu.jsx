import { getPostItem } from "/src/js/getPostItem.js";
import { getPostComments } from "/src/js/getPostComments.js";
import { Suspense } from "react";
import "./ObjectCardItemPageRu.scss";
import { Link, useLoaderData, useAsyncValue, Await } from "react-router-dom";

function Object() {

	const post = useAsyncValue();

	return (<div>
		<h1>title: {post.title}</h1>
		<h2>UserId: {post.userId}</h2>
		<h3>id: {post.id}</h3>
		<p>body: {post.body}</p>
	</div>)
}


function ObjectCardItemPageRu() {
	const { post, id } = useLoaderData();

	return (
		<div className="post-id__wrapper">
			<div className="post-id__content">
				<h1>карточка объекта - {id}</h1>
				<Suspense fallback={<h1 style={{ backgroundColor: "yellow" }}>...Карточка объекта загружается</h1>}>
					<Await resolve={post}>
						<Object />
					</Await>
				</Suspense>
				<Link to="/ru/objects">
					<button name="list">В каталог объектов</button>
				</Link>
			</div>
		</div>
	);
}

//============================================================

export const loaderPostItem = async ({ params }) => {
	const id = params.id;

	return { post: await getPostItem(id), comments: getPostComments(id), id };
}

export default ObjectCardItemPageRu;