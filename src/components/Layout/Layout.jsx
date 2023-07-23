import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Navigation from "/src/components/Navigation/Navigation.jsx";
import Footer from "/src/components/Footer/Footer.jsx";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";



function Layout() {

	let location = useLocation();


	const [isActiveHeader, setIsActiveHeader] = useState(false);


	useEffect(() => {
		setIsActiveHeader(true)
	}, [location]);

	function resetHeaderMenu() {
		setIsActiveHeader(false);
	}


	return (
		<>
			<Navigation resetHeaderMenu={resetHeaderMenu} isActiveHeader={isActiveHeader} />

			<Outlet />

			<Footer isActiveHeader={isActiveHeader} />
		</>
	)
}

export default Layout;