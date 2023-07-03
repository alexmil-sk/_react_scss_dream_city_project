import "./ObjectComponent.scss"

export default function ObjectsComponent() {
	return (
		<div className="fullscreen bg">

			<div className="fourth__container">
				<div className="flex__container">
					<div className="object">
						<div className="object__container">
							<div className="video__content">
								<video width="600" poster="/public/posters/condor1280.jpg" controls preload="metadata">
									<source type="video/webm" src="/public/videos/objects/condor.mp4" />
									<source type="video/mp4" src="/public/videos/objects/condor.webm" />
								</video>
							</div>
							<div className="text__content">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio corporis ipsa odit deserunt facere eaque, repudiandae aliquid quisquam nemo.
							</div>
						</div>
					</div>

					<div className="object">
						<div className="object__container">
							<div className="video__content">
								<video width="600" poster="/public/posters/condor1280.jpg" controls preload="metadata">
									<source type="video/webm" src="/public/videos/objects/condor.mp4" />
									<source type="video/mp4" src="/public/videos/objects/condor.webm" />
								</video>
							</div>
							<div className="text__content">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio corporis ipsa odit deserunt facere eaque, repudiandae aliquid quisquam nemo.
							</div>
						</div>
					</div>

					<div className="object">
						<div className="object__container">
							<div className="video__content">
								<video width="600" poster="/public/posters/condor1280.jpg" controls preload="metadata">
									<source type="video/webm" src="/public/videos/objects/condor.mp4" />
									<source type="video/mp4" src="/public/videos/objects/condor.webm" />
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
