import './SliderComponent.scss';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCards, EffectCube, EffectCoverflow, EffectFlip, EffectCreative } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function SliderComponent() {

	return (
		<>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
				direction={'horizontal'}
				effect={'fade'}
				speed={1000}
				simulateTouch={true}
				grabCursor={true}
				spaceBetween={0}
				slidesPerView={1}
				navigation={
					{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}
				}
				loop={true}
				pagination={{
					clickable: true,
					el: '.swiper-pagination',
					renderBullet: function (idx, className) {
						return '<span class="' + className + '">' + (idx + 1) + '</span>'
					}
				}}
				watchOverflow={true}
			>
				<SwiperSlide >
					<div className="swiper-slide__image">
						<img
							src="/images/dubai-1.jpg"
							alt="dubai-1"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide >
					<div className="swiper-slide__image">
						<img
							src="/images/dubai-2.jpg"
							alt="dubai-1"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide >
					<div className="swiper-slide__image">
						<img
							src="/images/dubai-3.jpg"
							alt="dubai-1"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="swiper-slide__image">
						<img
							src="/images/dubai-4.jpg"
							alt="dubai-1"
						/>
					</div>
				</SwiperSlide>
				<div className="swiper-button-prev"></div>
				<div className="swiper-button-next"></div>
				<div className="swiper-pagination"></div>
				<div className="swiper-scrollbar"></div>
			</Swiper>
		</>

	)
}

export default SliderComponent;