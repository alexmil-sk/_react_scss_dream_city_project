import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Navigation from "/src/components/Navigation/Navigation.jsx";
import Footer from "/src/components/Footer/Footer.jsx";


function Layout() {
	return (
		<>
			<Navigation />

			<Outlet />

			<Footer />
		</>
	)
}

export default Layout;