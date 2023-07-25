import { useLocation, useNavigate } from 'react-router-dom';
import "./LoginPage.scss";
import useAuth from "/src/hook/useAuth.js";



function LoginPage() {

	const navigate = useNavigate();
	const location = useLocation();
	const { signin } = useAuth();

	const fromPage = location.state?.from?.pathname || "/";

	function handleSubmit(e) {
		e.preventDefault();
		const form = e.target;
		const user = form.email.value;
		const password = form.password.value;

		signin(user, () => navigate(fromPage, {replace: true})) 

	}

	return (
		<div className="login">
			<div className="login__wrapper">
				<h1>Login Page</h1>
				<form onSubmit={handleSubmit}>
					<div className="email__container">
						<label htmlFor="email">Email</label>
						<input type="email" name="email" />
					</div>
					<div className="password__container">
						<label htmlFor="password">Password</label>
						<input type="password" name="password" />
					</div>
					<button type="submit">send</button>
				</form>
			</div>
		</div>
		
	)
}

export default LoginPage;