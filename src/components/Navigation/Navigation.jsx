import "./Navigation.scss";

function Navigation() {
	return (
		<header>
			<div className="header">
				<nav className="header__menu menu">
					<a href="/">Home</a>
					<a href="/object">Object</a>
					<a href="/about">About</a>
				</nav>
			</div>

		</header>
	)
}

export default Navigation;