import { NavLink } from "react-router-dom";
import "./NavigationRu.scss";

function NavigationRu({ isActiveHeader, resetHeaderMenu }) {



	const menuLinks = [
		{ link: "/ru/home", value: 'Домашняя' },
		{ link: "/ru/objects", value: 'Объекты' },
		{ link: "/ru/contacts", value: 'Контакты' },
		// { link: "/ru/posts", value: 'Посты' },
		{ link: "/ru/sort", value: 'Сортировка' },
		// { link: "/ru/menusticker", value: 'Липкое_меню' },
		// { link: "/ru/todos", value: 'Список_дел' },
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