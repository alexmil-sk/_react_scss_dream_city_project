import { NavLink } from "react-router-dom";
import "./NavigationSk.scss";

function NavigationRu({ isActiveHeader, resetHeaderMenu }) {



	const menuLinks = [
		{ link: "/ru/home", value: 'Domov' },
		{ link: "/ru/objects", value: 'Objekty' },
		{ link: "/ru/contacts", value: 'Kontakty' },
		{ link: "/ru/posts", value: 'Príspevky' },
		{ link: "/ru/sort", value: 'Triedenie' },
		{
			link: "/ru/menusticker", value: 'Lepkavé menu' },
		{
			link: "/ru/todos", value: 'Zoznam úloh' },
		{ link: "/", value: 'Výber_jazyka' }]

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

export default NavigationRu;