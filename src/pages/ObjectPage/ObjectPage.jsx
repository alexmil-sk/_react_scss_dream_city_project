import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import './ObjectPage.scss';
import { Navigation, Parallax, Mousewheel, Keyboard, Scrollbar, Pagination, FreeMode } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function SliderComponent() {

	const [sliderObject, setSliderObject] = useState({});
	const [isActiveIndex, setIsActiveIndex] = useState(0);
	const [isActiveMenu, setIsActiveMenu] = useState(false);

	const [hidePagination, setHidePagination] = useState(false);
	const [isFreeMode, setIsFreeMode] = useState(true);

	const menuLinks = ['Screen-1', 'Screen-2', 'Screen-3', 'Screen-4'];


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
		<div className={`wrapper__slider ${isActiveMenu && 'loaded'} ${hidePagination && 'free'}`}>
			<div className="header">
				<nav className="header__menu menu">
					{
						menuLinks?.map((menuLink, idx) => (
							<div
								onClick={() => sliderObject.slideTo(idx, 1000)}
								className={isActiveIndex === idx ? 'menu__link active' : 'menu__link'}
								key={idx}
							>
								{menuLink}
							</div>
						))
					}
				</nav>
			</div>
			<Swiper
				{...swiperParams}
				className="mySwiper-parallax"
			>
				<SwiperSlide >
					<div className="screen__content screen">
						<h1 className="screen__title screen__title_bg" data-swiper-parallax="50%" data-swiper-parallax-opacity="0">Slider Swiper Title</h1>
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
							<p>Voluptate consectetur molestias, voluptatibus in incidunt saepe maiores repudiandae repellendus temporibus ipsum sit accusamus pariatur ad, hic eos ab vitae. Vero, quis consequatur. Ea blanditiis nobis velit minus esse odio adipisci molestias natus, quis vel quaerat corrupti, facilis aspernatur quod, distinctio illum error cupiditate culpa eaque aliquid placeat laudantium omnis rem laboriosam! Aliquam tempore eveniet architecto voluptatem dolore, totam molestias ut ipsam? Ducimus recusandae obcaecati repellat natus nulla reiciendis laudantium esse placeat magnam nihil optio, illum unde. Laboriosam quasi placeat quaerat odit ratione! Eius illo exercitationem, cumque ut eos suscipit atque nemo assumenda nulla illum, ex quo explicabo, repellendus nihil molestias. Fugiat animi possimus aspernatur ducimus. Quidem exercitationem quis quos repudiandae autem ea aut error aliquam, numquam ratione sequi vel expedita dolorum pariatur sunt. Itaque quaerat quam nostrum recusandae, tempore, deserunt maiores voluptate error magni beatae veritatis natus quos fugit architecto saepe. Quos, quaerat repellat. Odit vel magnam nisi quidem, sapiente reprehenderit nostrum perferendis possimus praesentium deleniti ipsum suscipit necessitatibus dicta voluptas nemo atque nam rerum ullam qui repellendus? Aliquid porro quaerat nemo fugiat voluptates distinctio, ratione suscipit odit atque voluptatum, vel veritatis harum soluta assumenda excepturi explicabo! Ab debitis molestiae in autem veritatis, ut corrupti error blanditiis velit pariatur assumenda aliquid praesentium, obcaecati vero.</p>
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
		</div>

	)
}

export default SliderComponent;