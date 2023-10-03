import { NavLink } from "react-router-dom";
import "./NavigationRu.scss";

// eslint-disable-next-line react/prop-types
function NavigationRu({ isActiveHeader, resetHeaderMenu }) {



	const menuLinks = [
		{ link: "/ru/home", value: 'Домашняя' },
		{ link: "/ru/sort", value: 'Объекты' },
		{ link: "/ru/objects", value: 'Верт_Слайдер' },
		{ link: "/ru/contacts", value: 'Контакты' },
		{ link: "/ru/posts", value: 'Посты' },
		{ link: "/", value: 'Выбор_языка' }]

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