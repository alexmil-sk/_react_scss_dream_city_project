import { NavLink } from "react-router-dom";
import "./Navigation.scss";

function Navigation({ isActiveHeader, resetHeaderMenu }) {


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
				</div>
			</nav>
		</div>

	)
}

export default Navigation;