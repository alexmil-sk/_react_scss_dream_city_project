import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

function NotFoundPage() {
	return (
		<>
			<div className="notfound__wrapper">
				<div className="notfound__content">
					<h1>Not Found Page</h1>
				</div>
			</div>
			<Link to="/home">Home</Link>
		</>
	)
}

export default NotFoundPage