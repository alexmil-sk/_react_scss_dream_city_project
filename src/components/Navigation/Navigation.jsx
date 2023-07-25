import { NavLink, useNavigate } from "react-router-dom";
import "./Navigation.scss";
import useAuth from "/src/hook/useAuth.js";

function Navigation({ isActiveHeader, resetHeaderMenu }) {

	const navigate = useNavigate();
	const { signout } = useAuth();


	const menuLinks = [
		{ link: "/", value: 'Intro' },
		{ link: "/home", value: 'Home' },
		{ link: "/objects", value: 'Objects' },
		{ link: "/contacts", value: 'Contacts' },
		{ link: "/posts", value: 'Posts' },
		{ link: "/login", value: 'Login' }];

	return (
		<div className={`wrapper__header ${isActiveHeader ? 'loaded' : ''}`}>
			<div className="wrapper__background"></div>
			<nav className="header">
				<div className="header__menu menu">
					{
						menuLinks?.map(({ link, value }) => (
							<NavLink
								className="menu__link"
								to={link}
								key={value}
								onClick={resetHeaderMenu}
							>
								{value}
							</NavLink>
						))
					}
					<button onClick={() => signout(() => navigate("/home ", {replace: true}))}>Logout</button>
				</div>
			</nav>
		</div>

	)
}

export default Navigation;