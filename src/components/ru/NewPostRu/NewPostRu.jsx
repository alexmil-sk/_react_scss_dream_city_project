import { Form } from "react-router-dom";
import "./NewPostRu.scss";

function NewPostRu({ submitting}) {
	return (
		<>
			<Form action="/ru/posts/new" method="post" className="create-post__form">
				<div className="form__title">
					<label htmlFor="title">Title</label>
					<input type="text" name="title" id="title" />
				</div>
				<div className="form__body">
					<label htmlFor="body">Body</label>
					<textarea type="text" name="body" id="body" />
				</div>
				<input type="hidden" name="userId" value="1" />
				<input type="submit" value="Add post" disabled={ submitting} />
			</Form>
		</>
	)
}

export default NewPostRu;