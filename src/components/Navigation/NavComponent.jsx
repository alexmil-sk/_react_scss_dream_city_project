import { useState } from "react";
import './NavComponent.scss';
import ActiveLinkComponent from "./ActiveLinkComponent/ActiveLinkComponent.jsx";

function NavComponent({menuLinks}) {

	//const [isActive, setIsActive] = useState(false);


	function getActiveLink(e, idx) {

		if (e.target.dataset.name === menuLinks[idx]) {

			e.target.classList.add('active');
			
			//setIsActive(true);
		} else {
			return;
			//setIsActive(false);
		}
	}


	return (
		<div className="header">
			<nav className="header__menu menu">
				{
					menuLinks?.map((link, idx) => (
						
						<ActiveLinkComponent
							getActiveLink={(e) => getActiveLink(e,idx)}
							//isActive={isActive}
							//isActive={firstScreen}
							link={link}
							key={idx}
						/>
					))
				}
			</nav>
		</div>
	)
}

export default NavComponent;