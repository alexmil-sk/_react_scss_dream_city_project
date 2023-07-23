import "./Footer.scss";

function FooterComponent() {
	return (
		<div className="footer">
			<div className="container">
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