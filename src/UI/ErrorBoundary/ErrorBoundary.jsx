import "./ErrorBoundary.scss";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

function ErrorBoundary() {
	const error = useRouteError();


	//if (isRouteErrorResponse(error)) {
		return (
			<div className="error-boundary__wrapper">
				<div className="error-boundary__container">
					<h1>ErrorBoundary</h1>
					<h2>h2: {error.status || 'Status error 404'}</h2>
					<h3>h3: {error.statusText || 'Something goes Wrong!!!'}</h3>
					{/* <h4>h4: {error.data.message}</h4>
					<h4>h4: {error.data.reason}</h4> */}
				</div>
			</div>
		)
	//}

	// return (<div className="error-boundary__wrapper">
	// 	<div className="error-boundary__container">
	// 		<h1>Error!!! Not React-Router-Dom Error!!!</h1>
	// 	</div>
	// </div>)


}

export default ErrorBoundary;