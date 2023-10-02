import "./LayoutSk.scss";
import { Outlet } from "react-router-dom";
import NavigationSk from "/src/components/sk/NavigationSk/NavigationSk.jsx";
import FooterSk from "/src/components/sk/FooterSk/FooterSk.jsx";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


function LayoutSk() {

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
			<NavigationSk
				resetHeaderMenu={resetHeaderMenu}
				isActiveHeader={isActiveHeader}
			/>
				<Outlet />
			<FooterSk
				isActiveHeader={isActiveHeader}
			/>
		</>
	)
}

export default LayoutSk;