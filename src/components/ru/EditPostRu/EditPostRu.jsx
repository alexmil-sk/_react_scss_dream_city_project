import { Form } from "react-router-dom";
import "./EditPostRu.scss";


function EditPostRu({ id, title, body, userId, submitting }) {
	return (
		<>
			<Form action={`/ru/posts/${id}/edit`} method="post" className="edit-post__form">
				<div className="form__title">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						name="title"
						id="title"
						defaultValue={title}
					/>
				</div>
				<div className="form__body">
					<label htmlFor="body">Body</label>
					<textarea
						type="text"
						name="body"
						id="body"
						defaultValue={body}
					/>
				</div>
				<input type="hidden" name="userId" value={userId} />
				<input type="hidden" name="id" value={id} />
				<input
					type="submit"
					value="Update post"
					disabled={submitting}
				/>
			</Form>
		</>
	)
}

export default EditPostRu;