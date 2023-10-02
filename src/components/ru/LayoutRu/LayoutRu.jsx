import "./LayoutRu.scss";
import { Outlet } from "react-router-dom";
import NavigationRu from "/src/components/ru/NavigationRu/NavigationRu.jsx";
import FooterRu from "/src/components/ru/FooterRu/FooterRu.jsx";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


function LayoutRu() {

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
			<NavigationRu
				resetHeaderMenu={resetHeaderMenu}
				isActiveHeader={isActiveHeader}
			/>
				<Outlet />
			<FooterRu
				isActiveHeader={isActiveHeader}
			/>
		</>
	)
}

export default LayoutRu;