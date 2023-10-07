/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "./SliderObjectCardComponentRu.scss";
import { Navigation, FreeMode, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

function SliderObjectCardComponentRu({ foto }) {
	const main_params = {
		modules: [Navigation, FreeMode, Autoplay],
		spaceBetween: 10,
		speed: 1000,
		direction: "horizontal",
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		loop: true,
	};

	return (
		<>
			<Swiper style={{ "--swiper-navigation-color": "#fff" }} {...main_params} className="mySwiper2">
				{foto.map((item, idx) => (
					<SwiperSlide style={{ "margin-right": "0" }} key={idx}>
						<Link to={item} target="_blank" key={idx} rel="noreferrer">
							<img src={item} height="50" />
						</Link>
					</SwiperSlide>
				))}
				{/* 
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
				</SwiperSlide> */}
				<div className="swiper-button-prev"></div>
				<div className="swiper-button-next"></div>
			</Swiper>
		</>
	);
}

export default SliderObjectCardComponentRu;
