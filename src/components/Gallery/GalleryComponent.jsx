import './GalleryComponent.scss'

function GalleryComponent() {
	return (
		<div className="fullscreen gallery">
			<div className="content">
				<div className="residence">
					<div className="container">
						<div className="residence__row">
							<div className="residence__body"></div>
							<div className="residence__image"></div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer">
				<div className="container">
					<div className="footer__row">
						<div className="footer__text"></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GalleryComponent;