import { useState } from "react";
import {Link, useLocation} from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SliderCardItemFotosComponent.scss";
import { Navigation, FreeMode, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import undo_arrow from "../../../public/svg/undo_arrow.svg";


function SliderCardItemFotosComponent() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const { state } = useLocation();
	const { objects, id} = state;
	
	const main_params = {
		modules: [Navigation, FreeMode, Thumbs],
		spaceBetween: 10,
		speed: 1000,
		direction: "horizontal",
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		loop: true,
		thumbs: {
			swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
		},
	};

	const thumbs_params = {
		modules: [Navigation, FreeMode, Thumbs],
		spaceBetween: 10,
		watchSlidesProgress: true,
		onSwiper: setThumbsSwiper,
		slidesPerView: objects.length,
		freeMode: true,
	};

	return (
		<>
			<div className="fotos__button_back">
				<Link to={`/ru/objects/${id}`}>
					<img src={undo_arrow} alt="undo_arrow"/>
				</Link>
			</div>
			
			<Swiper
				style={{ "--swiper-navigation-color": "#fff" }}
				{...main_params}
				className="mySwiperMain">
				{objects.map((item, idx) => (
					<SwiperSlide key={idx}>
						<img src={item} alt={item} />
					</SwiperSlide>
				))}

				<div className="swiper-button-prev"></div>
				<div className="swiper-button-next"></div>
			</Swiper>

			<Swiper {...thumbs_params} className="mySwiperThumb">
				{objects.map((item, idx) => (
					<SwiperSlide key={idx} >
						<img src={item} alt={item} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}

export default SliderCardItemFotosComponent;
