import { useNavigate } from "react-router-dom";
import "./NotFoundPage.scss";

function NotFoundPage() {
	const navigate = useNavigate();

	return (
		<>
			<div className="notfound__wrapper">
				<div className="notfound__content">
					<h1>Not Found Page</h1>
				</div>
			</div>
			<button onClick={() => navigate(-1)}>НАЗАД</button>
		</>
	);
}

export default NotFoundPage;
