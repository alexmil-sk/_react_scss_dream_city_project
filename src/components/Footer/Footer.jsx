import { useEffect, useState } from "react";
import "./Footer.scss";

function FooterComponent({ isActiveHeader }) {


	return (
		<div className={`footer ${isActiveHeader && 'loaded'}`}>
			<div className="footer__container">
				<div className="footer__row">
					<div
						className="footer__text"
					>
						<span>DreamCity /&nbsp;</span>
						<span>
							{new Date().getFullYear()}&nbsp;/
						</span>
						<span>&nbsp;{Date()}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FooterComponent;