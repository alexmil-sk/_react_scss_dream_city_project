import "./FooterSk.scss";

function FooterSk({ isActiveHeader }) {


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

export default FooterSk;