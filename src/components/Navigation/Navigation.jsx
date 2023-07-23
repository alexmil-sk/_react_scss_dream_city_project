import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navigation.scss";

function Navigation() {

	const [isActiveHeader, setIsActiveHeader] = useState(false);

	const menuLinks = [
		{ link: "/", value: 'Intro' },
		{ link: "/home", value: 'Home' },
		{ link: "/objects", value: 'Objects' },
		{ link: "/contacts", value: 'Contacts' }];

	let location = useLocation();

	useEffect(() => {
		setIsActiveHeader(true)
	}, [location]);

	function resetHeaderMenu() {
		setIsActiveHeader(false)
	}


	return (
		<div className={`wrapper__header ${isActiveHeader && 'loaded'}`}>
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