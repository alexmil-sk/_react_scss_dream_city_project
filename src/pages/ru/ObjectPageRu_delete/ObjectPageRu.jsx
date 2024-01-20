import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import './ObjectPageRu.scss';
import { Navigation, Parallax, Mousewheel, Keyboard, Scrollbar, Pagination, FreeMode } from 'swiper/modules';
import { motion } from "framer-motion";
import { framerOpacityObjects } from "/src/js/animationFramerSettings.js";


import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function ObjectPageSliderComponentRu() {

	const [sliderObject, setSliderObject] = useState({});
	const [isActiveIndex, setIsActiveIndex] = useState(0);
	const [isActiveMenu, setIsActiveMenu] = useState(false);

	const [hidePagination, setHidePagination] = useState(false);
	const [isFreeMode, setIsFreeMode] = useState(true);

	const menuSlider = ['Screen-1', 'Screen-2', 'Screen-3', 'Screen-4'];

	function closeActiveMenu() {
		setIsActiveMenu(false);
	}

	const swiperParams = {
		modules: [Navigation, Parallax, Mousewheel, Keyboard, Scrollbar, Pagination, FreeMode],
		spaceBetween: 10,
		direction: 'vertical',
		slidesPerView: 'auto',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		freeMode: isFreeMode,
		loop: false,
		speed: 1000,
		parallax: true,
		mousewheel: {
			sensitivity: 1
		},
		keyboard: true,
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
		watchOverflow: true,
		scrollbar: {
			el: '.swiper__scroll',
			dragClass: 'swiper__drag-scroll',
			draggable: true
		},
		pagination: {
			el: '.swiper__pagination',
			type: 'bullets',
			bulletClass: 'swiper__bullet',
			bulletActiveClass: 'swiper__bullet_active',
			clickable: true,
		},
		onBeforeInit: (swiper) => {
			setSliderObject(swiper);
			setIsActiveMenu(swiper.mounted);
		},
		onInit: (swiper) => {
			setHidePagination(swiper.height < 500);
			setIsFreeMode(swiper.height < 500);

		},
		onResize: (swiper) => {
			setHidePagination(swiper.height < 500);
			setIsFreeMode(swiper.height < 500);
		},
		onActiveIndexChange: (swiper) => setIsActiveIndex(swiper.activeIndex),
	};

	//Interface SwiperEvents Search Swiper - v10.0.4
	//https://swiperjs.com/types/interfaces/types_swiper_events.SwiperEvents#snapIndexChange

	//https://www.youtube.com/watch?v=tBIHMzD1BZM - Адаптивная верстка полноэкранного лендинга с навигацией и параллакс эффектом на базе слайдера Swiper

	return (
		<motion.div
			className={`wrapper__slider ${isActiveMenu ? 'loaded' : 'unloaded'} ${hidePagination && 'free'}`}
			initial={'hidden'}
			animate={'visible'}
			variants={framerOpacityObjects}
		>
			<div className="header" >
				<nav className="header__menu">
					<div className="menu">
						{
							menuSlider?.map((menuLink, idx) => (
								<div
									onClick={() => sliderObject.slideTo(idx, 1000)}
									className={isActiveIndex === idx ? 'menu__link active' : 'menu__link'}
									key={idx}
								>
									{menuLink}
								</div>
							))
						}
					</div>

					<div
						className="menu__link close"
						onClick={closeActiveMenu}
					>&times;
					</div>
				</nav>
			</div>
			<Swiper
				{...swiperParams}
				className="mySwiper-parallax"
			>
				<SwiperSlide >
					<div className="screen__content screen">
						<h1
							className="screen__title screen__title_bg"
							data-swiper-parallax="50%"
							data-swiper-parallax-opacity="0">Slider Swiper Title</h1>
					</div>
					<div className="screen__body">
						<div className="screen__image" data-swiper-parallax="33%" data-swiper-parallax-scale="1.1">
							<img
								src="/images/dubai-1.jpg"
								alt="dubai-1"
							/>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide >
					<div className="screen__content screen">
						<h1 className="screen__title screen__title_bg" data-swiper-parallax="50%" data-swiper-parallax-opacity="0">Block 2 Title</h1>
						<div className="screen__text" data-swiper-parallax-opacity="0" data-swiper-parallax="-100%" data-swiper-parallax-duration="900" >
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat corrupti quos doloremque laborum, sequi porro iure deserunt blanditiis quidem optio.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, culpa corporis ea nostrum commodi voluptates?</p>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, asperiores!</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide >
					<div className="screen__content screen">
						<h1 className="screen__title screen__title_bg" data-swiper-parallax-opacity="0" data-swiper-parallax="-100%" data-swiper-parallax-duration="1000">Block 3 Slider</h1>
					</div>
					<div className="screen__body">
						<div className="screen__image" data-swiper-parallax="33%" data-swiper-parallax-scale="1.1">
							<img
								src="/images/dubai-2.jpg"
								alt="dubai-2"
							/>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="screen__content screen">
						<h1 className="screen__title screen__title_bg" data-swiper-parallax-opacity="0" data-swiper-parallax="-100%" data-swiper-parallax-duration="1000">Block 4 Title</h1>
						<div className="screen__text"
							data-swiper-parallax-opacity="0" data-swiper-parallax="-100%" data-swiper-parallax-duration="900">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat corrupti quos doloremque laborum, sequi porro iure deserunt blanditiis quidem optio.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, culpa corporis ea nostrum commodi voluptates?</p>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, asperiores!</p>
						</div>
					</div>
				</SwiperSlide>
				<div className="swiper__pagination"></div>
				<div className="swiper__scroll"></div>
			</Swiper >
		</motion.div>

	)
}

export default ObjectPageSliderComponentRu;