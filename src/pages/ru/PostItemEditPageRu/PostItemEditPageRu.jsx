import "./PostItemEditPageRu.scss";
import { getPostItem } from "/src/js/getPostItem.js";
import { useNavigation, Link, useLoaderData, useActionData } from "react-router-dom";
import EditPostRu from "/src/components/ru/EditPostRu/EditPostRu.jsx";


function PostItemEditPageRu() {

	const { post, id } = useLoaderData();
	const navigation = useNavigation();
	const data = useActionData();

	return (
		<div className="post-edit__wrapper">
			<div className="post-edit__container">
				{data?.message && <h2 style={{fontSize: '30px', color: 'blue', backgroundColor: 'lightblue'}}>{data.message}</h2>}
				<h1>Post Item Edit Page - {id}</h1>
				<EditPostRu
					{...post}
					submitting={navigation.state === 'submitting'}
				/>
				<div className="block__btn">
					<Link to="/ru/posts"><button name="posts-list">To List of Posts</button></Link>
					<Link to={`/ru/posts/${id}`}><button name="back">Back</button></Link>
				</div>
			</div>
		</div>
	)
}

async function updatePost(post) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.get('id')}`, {
		method: 'PUT',
		body: post
	});
	return res.json();
}

export const editPostAction = async ({ request }) => {
	const formData = await request.formData();
	const updatedPost = await updatePost(formData);

	if (!formData.get('title') || !formData.get('body')) {
		return {message: `All fields are required!!!`}
	}

	return { message: `Post ${updatedPost.id} was successfully updated`}
}




//===================================================================

export const loaderEditPost = async ({ params }) => {
	const id = params.id;

	return { post: await getPostItem(id), id };
}

export default PostItemEditPageRu;