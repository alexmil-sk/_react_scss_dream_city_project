import { Swiper, SwiperSlide } from 'swiper/react';
import './App.scss';
import { Navigation, Parallax, Mousewheel, Keyboard } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';


function SliderComponent() {



	const params = {
		modules: [Navigation, Parallax, Mousewheel, Keyboard],
		spaceBetween: 10,
		direction: 'vertical',
		slidesPerView: 'auto',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		loop: false,
		speed: 1000,
		parallax: true,
		mousewheel: {
			sensitivity: 2
		},
		keyboard: true
	}


	return (
		<>
			<Swiper
				style={{ "--swiper-navigation-color": "#fff" }}
				{...params}
				className="mySwiper"
			>
				<SwiperSlide >
					<div className="screen__content screen">
						<h1 className="screen__title screen__title_bg">Slider Swiper Title</h1>
					</div>
					<div className="screen__body">
						<div className="screen__image">
							<img
								src="/images/dubai-1.jpg"
								alt="dubai-1"
							/>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide >
					<div className="screen__content screen">
						<h1 className="screen__title screen__title_bg">Block 2 Title</h1>
						<div className="screen__text">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat corrupti quos doloremque laborum, sequi porro iure deserunt blanditiis quidem optio.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, culpa corporis ea nostrum commodi voluptates?</p>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, asperiores!</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide >
					<div className="screen__content screen">
						<h1 className="screen__title screen__title_bg">Block 3 Slider</h1>
					</div>
					<div className="screen__body">
						<div className="screen__image">
							<img
								src="/images/dubai-2.jpg"
								alt="dubai-2"
							/>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="screen__content screen">
						<h1 className="screen__title screen__title_bg">Block 4 Title</h1>
						<div className="screen__text">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat corrupti quos doloremque laborum, sequi porro iure deserunt blanditiis quidem optio.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, culpa corporis ea nostrum commodi voluptates?</p>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, asperiores!</p>
						</div>
					</div>
				</SwiperSlide>
				<div className="swiper-button-prev"></div>
				<div className="swiper-button-next"></div>
			</Swiper >
		</>

	)
}

export default SliderComponent;