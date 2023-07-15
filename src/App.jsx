import { Swiper, SwiperSlide } from 'swiper/react';
import './App.scss';
import { Navigation, FreeMode} from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';


function SliderComponent() {



	const main_params = {
		modules: [Navigation, FreeMode],
		spaceBetween: 10,
		direction: 'vertical',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		loop: false
	}


	return (
		<>
			<Swiper
				style={{ "--swiper-navigation-color": "#fff" }}
				{...main_params}
				className="mySwiper"
			>
				<SwiperSlide >
					<img
						src="/images/dubai-1.jpg"
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
				<div className="swiper-button-prev"></div>
				<div className="swiper-button-next"></div>
			</Swiper>
		</>

	)
}

export default SliderComponent;