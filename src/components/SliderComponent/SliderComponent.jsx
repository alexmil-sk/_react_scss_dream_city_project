import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import './SliderComponent.scss';
import { Navigation, FreeMode, Thumbs, Autoplay } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';


function SliderComponent() {

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
			<Swiper style={{ "--swiper-navigation-color": "#fff" }} {...main_params} className="mySwiperMain">
				<SwiperSlide>
					<img src="/images/home/slider_component/slider-1.jpg" alt="dubai-1" />
				</SwiperSlide>

				<SwiperSlide>
					<img src="/images/home/slider_component/slider-2.jpg" alt="dubai-2" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/images/home/slider_component/slider-3.jpg" alt="dubai-3" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/images/home/slider_component/slider-4.jpg" alt="dubai-4" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/images/home/slider_component/slider-5.jpg" alt="dubai-7" />
				</SwiperSlide>
				<div className="swiper-button-prev"></div>
				<div className="swiper-button-next"></div>
			</Swiper>

			<Swiper {...thumbs_params} className="mySwiperThumb">
				<SwiperSlide>
					<img src="/images/home/slider_component/slider-1.jpg" alt="dubai-1" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/images/home/slider_component/slider-2.jpg" alt="dubai-1" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/images/home/slider_component/slider-3.jpg" alt="dubai-1" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/images/home/slider_component/slider-4.jpg" alt="dubai-1" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/images/home/slider_component/slider-5.jpg" alt="dubai-7" />
				</SwiperSlide>
			</Swiper>
		</>
	);
}

export default SliderComponent;