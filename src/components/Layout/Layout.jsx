import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Navigation from "/src/components/Navigation/Navigation.jsx";
import Footer from "/src/components/Footer/Footer.jsx";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
//import { motion } from "framer-motion"


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

			{/* <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					delay: 0,
					duration: 1,
					repeat: 0,
					repeatDelay: 0,
					ease: 'linear'
				}}
			> */}
				<Outlet />
			{/* </motion.div> */}

			<Footer isActiveHeader={isActiveHeader} />
		</>
	)
}

export default Layout;