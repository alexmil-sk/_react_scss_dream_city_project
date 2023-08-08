import "./Menu.scss";
import MenuMotion from "/src/components/MenuMotion/MenuMotion.jsx";

function Menu() {
	return (
		<div className="menu__animated">
			<div className="menu__container">
					<MenuMotion />
			</div>
		</div>
	)
}

export default Menu