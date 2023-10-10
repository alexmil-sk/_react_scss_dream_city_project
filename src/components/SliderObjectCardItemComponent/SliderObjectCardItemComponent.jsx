/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "./SliderObjectCardItemComponent.scss";
import { Navigation, FreeMode, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

function SliderObjectCardItemComponent({ fotos }) {
	const main_params = {
		modules: [Navigation, FreeMode, Autoplay],
		spaceBetween: 10,
		speed: 2000,
		direction: "horizontal",
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		loop: true,
		autoplay: {
			delay: 2000,
		},
	};

	return (
		<>
			<Swiper style={{ "--swiper-navigation-color": "#fff" }} {...main_params} className="mySwiperCardItem">
				{fotos.map((item, idx) => (
					<SwiperSlide style={{ "marginRight": "0" }} key={idx}>
						<Link to={item} target="_blank" key={idx} rel="noreferrer">
							<img src={item} />
						</Link>
					</SwiperSlide>
				))}
				<div className="swiper-button-prev"></div>
				<div className="swiper-button-next"></div>
			</Swiper>
		</>
	);
}

export default SliderObjectCardItemComponent;
