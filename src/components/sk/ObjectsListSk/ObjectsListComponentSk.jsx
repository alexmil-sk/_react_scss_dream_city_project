import "./ObjectsListComponentSk.scss"

export default function ObjectsComponentSk() {
	return (
		<div className="fullscreen bg">

			<div className="fourth__container">
				<div className="fourth__container_flex">

					<div className="objects">
						<div className="objects__container">
							<div className="video__content">
								<video width="600" poster="/posters/condor1280.jpg" controls preload="metadata">
									<source type="video/webm" src="/videos/objects/condor.mp4" />
									<source type="video/mp4" src="/videos/objects/condor.webm" />
								</video>
							</div>
							<div className="text__content">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio corporis ipsa odit deserunt facere eaque, repudiandae aliquid quisquam nemo.
							</div>
						</div>
					</div>

					<div className="objects">
						<div className="objects__container">
							<div className="video__content">
								<video width="600" poster="/posters/condor1280.jpg" controls preload="metadata">
									<source type="video/webm" src="/videos/objects/condor.mp4" />
									<source type="video/mp4" src="/videos/objects/condor.webm" />
								</video>
							</div>
							<div className="text__content">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio corporis ipsa odit deserunt facere eaque, repudiandae aliquid quisquam nemo.
							</div>
						</div>
					</div>

					<div className="objects">
						<div className="objects__container">
							<div className="video__content">
								<video width="600" poster="/posters/condor1280.jpg" controls preload="metadata">
									<source type="video/webm" src="/videos/objects/condor.mp4" />
									<source type="video/mp4" src="/videos/objects/condor.webm" />
								</video>
							</div>
							<div className="text__content">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio corporis ipsa odit deserunt facere eaque, repudiandae aliquid quisquam nemo.
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>

	)
}
