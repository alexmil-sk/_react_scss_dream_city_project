import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SliderHomeComponent.scss";
import { Navigation, FreeMode, Thumbs, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/navigation";

const sliderLinksHomePage = [
	{
		title: "slider-1",
		link: "/images/home/slider_component/slider-1.jpg",
	},
	{
		title: "slider-2",
		link: "/images/home/slider_component/slider-2.jpg",
	},
	{
		title: "slider-3",
		link: "/images/home/slider_component/slider-3.jpg",
	},
	{
		title: "slider-4",
		link: "/images/home/slider_component/slider-4.jpg",
	},
	{
		title: "slider-5",
		link: "/images/home/slider_component/slider-5.jpg",
	},
];

function SliderHomeComponent() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	const main_params = {
		modules: [Navigation, FreeMode, Autoplay, Thumbs],
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
		modules: [Navigation, FreeMode, Autoplay, Thumbs],
		spaceBetween: 10,
		watchSlidesProgress: true,
		onSwiper: setThumbsSwiper,
		slidesPerView: 5,
		freeMode: true,
	};

	return (
		<>
			<Swiper style={{ "--swiper-navigation-color": "#fff" }} {...main_params} className="mySwiperMain">
				{sliderLinksHomePage.map((item, idx) => (
					<SwiperSlide key={idx}>
						<img src={item.link} alt={item.title} />
					</SwiperSlide>
				))}

				<div className="swiper-button-prev"></div>
				<div className="swiper-button-next"></div>
			</Swiper>

			<Swiper {...thumbs_params} className="mySwiperThumb">
				{sliderLinksHomePage.map((item, idx) => (
					<SwiperSlide key={idx}>
						<img src={item.link} alt={item.title} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}

export default SliderHomeComponent;
