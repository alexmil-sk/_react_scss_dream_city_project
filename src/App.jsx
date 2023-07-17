import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import './App.scss';
import { Navigation, Parallax, Mousewheel, Keyboard, Scrollbar, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function SliderComponent() {

	const [sliderObject, setSliderObject] = useState({});

	const menuLinks = ['Screen-1', 'Screen-2', 'Screen-3', 'Screen-4'];


	const swiperParams = {
		modules: [Navigation, Parallax, Mousewheel, Keyboard, Scrollbar, Pagination],
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
		init: false,
		on: {
			init: function () {
				menuSlider();
			},
			slideChange: function () {
				menuSliderRemove()
				menuLinks[sliderObject.realIndex].classList.add('active');
			}
		}
	};

	//Interface SwiperEvents Search Swiper - v10.0.4
	//https://swiperjs.com/types/interfaces/types_swiper_events.SwiperEvents#snapIndexChange

	function menuSlider() {
		if (menuLinks.length > 0) {
			menuLinks[sliderObject.realIndex].classList.add('active');
			menuLinks?.map((link, idx) => (
				link.addEventListener("click", function (e) {
					menuSliderRemove();
					sliderObject.slideTo(idx, 800);
					menuLinks.classList.add('active');
					e.preventDefault();
				})
			))
		}
	}


	function menuSliderRemove() {
		let menuLinkActive = document.querySelector('.menu__link.active');

		if (menuLinkActive) {
			menuLinkActive.classList.remove('active');
		}
	}


	return (
		<>

			<div className="header">
				<nav className="header__menu menu">
					<div className='menu__link'>
						Screen-1
					</div>
				</nav>
			</div>
			<Swiper
				onBeforeInit={(swiper) => setSliderObject(swiper)}
				{...swiperParams}
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
				<div className="swiper__pagination"></div>
				<div className="swiper__scroll"></div>
			</Swiper >
		</>

	)
}

export default SliderComponent;