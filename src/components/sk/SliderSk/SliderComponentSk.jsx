import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import './SliderComponentSk.scss';
import { Navigation, FreeMode, Thumbs, Autoplay } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';


function SliderComponentSk() {

	const [thumbsSwiper, setThumbsSwiper] = useState(null);


	const main_params = {
		modules: [Navigation, FreeMode, Autoplay, Thumbs],
		spaceBetween: 10,
		speed: 1000,
		direction: 'horizontal',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		loop: true,
		thumbs: {
			swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
		},
	}

	const thumbs_params = {
		modules: [Navigation, FreeMode, Autoplay, Thumbs],
		spaceBetween: 10,
		watchSlidesProgress: true,
		onSwiper: setThumbsSwiper,
		slidesPerView: 5,
		freeMode: true
	}


	return (
		<>
			<Swiper
				style={{ "--swiper-navigation-color": "#fff" }}
				{...main_params}
				className="mySwiper2"
			>
				<SwiperSlide >
					<img
						src="/images/dubai-1.png"
						alt="dubai-1"
					/>
				</SwiperSlide>

				<SwiperSlide >
					<img
						src="/images/dubai-2.jpg"
						alt="dubai-2"
					/>
				</SwiperSlide>
				<SwiperSlide >
					<img
						src="/images/dubai-3.jpg"
						alt="dubai-3"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="/images/dubai-4.jpg"
						alt="dubai-4"
					/>
				</SwiperSlide>
				<SwiperSlide >
					<img
						src="/images/dubai-7.jpg"
						alt="dubai-7"
					/>
				</SwiperSlide>
				<div className="swiper-button-prev"></div>
				<div className="swiper-button-next"></div>
			</Swiper>

			<Swiper
				{...thumbs_params}
				className="mySwiper"
			>
				<SwiperSlide >
					<img
						src="/images/dubai-1.png"
						alt="dubai-1"
					/>
				</SwiperSlide>
				<SwiperSlide >
					<img
						src="/images/dubai-2.jpg"
						alt="dubai-1"
					/>
				</SwiperSlide>
				<SwiperSlide >
					<img
						src="/images/dubai-3.jpg"
						alt="dubai-1"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="/images/dubai-4.jpg"
						alt="dubai-1"
					/>
				</SwiperSlide>
				<SwiperSlide >
					<img
						src="/images/dubai-7.jpg"
						alt="dubai-7"
					/>
				</SwiperSlide>
			</Swiper>

		</>

	)
}

export default SliderComponentSk;