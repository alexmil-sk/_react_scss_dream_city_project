import { NavLink } from "react-router-dom";
import "./NavigationRu.scss";

// eslint-disable-next-line react/prop-types
function NavigationRu({ isActiveHeader, resetHeaderMenu }) {



	const menuLinks = [
		{ link: "/ru/home", value: 'Домашняя' },
		{ link: "/ru/objects", value: 'Объекты' },
		{ link: "/ru/contacts", value: 'Контакты' }]

	return (
		<div className={`wrapper__header ${isActiveHeader ? "loaded" : ""}`}>
			<nav className="header">
				<div className="header__menu menu">
					{menuLinks?.map(({ link, value }) => (
						<NavLink className="menu__link" to={link} key={value} onClick={resetHeaderMenu}>
							{value}
						</NavLink>
					))}
					<NavLink to="/" className="menu__link_lang">
						<img src="/svg/language.svg" alt="language" />
					</NavLink>
				</div>
			</nav>
		</div>
	);
}

export default NavigationRu;