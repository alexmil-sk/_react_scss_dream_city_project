
import ObjectsListComponentRu from "/src/components/ru/ObjectsListComponentRu/ObjectsListComponentRu.jsx";
import ObjectCardComponentRu from "/src/components/ru/ObjectCardComponentRu/ObjectCardComponentRu.jsx";
import SliderComponentRu from "/src/components/ru/SliderComponentRu/SliderComponentRu.jsx";
import "./HomePageRu.scss";
import { motion } from "framer-motion";
import { framerOpacity } from "/src/js/animationFramerSettings.js";


function HomePageRu() {

	return (
		<motion.div
			className="wrapper"
			initial={'hidden'}
			animate={'visible'}
			variants={framerOpacity}
		>

			<div className="fullscreen foto__container_title">
				<div className="title__row">
					<div className="logo__item">
						<img src="/icons/logo_dcg.png" alt="logo_dcg" />
					</div>
					<h1>Элегантная городская жизнь</h1>
					<div className="undertitle">
						<p>братислава</p>
						<p>словакия</p>
					</div>
				</div>

			</div>

			<div className="fullscreen text__container_why-dubai">
				<div className="why-dubai__content">
					<h1>ПОЧЕМУ ДУБАЙ?</h1>
					<div className="gallery-container">
						<div className="gallery-container_row">
							<div className="gallery__item">
								<img src="/images/home/Dubai_fairtail_city.png" alt="" />
								<p>Дубай - сказочный город с вечным летом!</p>
							</div>
							<div className="gallery__item">
								<img src="/images/home/Modern_infrastracture.png" alt="" />
								<p>С самой современной инфраструктурой</p>
							</div>
							<div className="gallery__item">
								<img src="/images/home/People_from_everywhere.png" alt="" />
								<p>и дружелюбными людьми со всего мира.</p>
							</div>
							<div className="gallery__item">
								<img src="/images/home/Find_job.png" alt="" />
								<p>Независимо от того, ищешь ли ты работу</p>
							</div>
							<div className="gallery__item">
								<img src="/images/home/Planed_for_rest.png" alt="" />
								<p>или планируешь отдых,</p>
							</div>
							<div className="gallery__item">
								<img src="/images/home/Dubai_best_place.png" alt="" />
								<p>Дубай станет лучшим местом для тебя</p>
							</div>
						</div>

					</div>
				</div>

			</div>

			<SliderComponentRu />

			<div className="fullscreen text__container_you-can">
				<div className="you-can__content">
					<h1>Здесь вы можете:</h1>
					<div className="list__container">
						<ul className="list__container_row">
							<li className="list__item">
								1.&nbsp;Отдыхать на лучшем из морских курортов, когда пожелаете.
							</li>
							<li className="list__item">
								2.&nbsp;Каждый год получать гарантированные 5% дохода на инвестиции.
							</li>
							<li className="list__item">
								3.&nbsp;Ежегодно получать 10-17% дохода на инвестиции, сдавая свое жилье в аренду.
							</li>
							<li className="list__item">
								4.&nbsp;ВНЖ на срок от 2-х до 10 лет.
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="fullscreen foto__container_one"></div>

			<div className="fullscreen text__container_projects">
				<div className="projects__content">
					<h1>Предлагаем вам к покупке недвижимость
						от застройщика <span>Condor Group (Dubai)</span>:</h1>

					<div className="objects">
						<div className="objects__row">
							<div className="object__item foto__condor">
								<div className="object__item_header">
									<p>Condor Marina Star Residences</p>
									<p>расположена на берегу моря в окружении прекрасных пляжей и рядом с Торговым центром Dubai Marina Mall</p>
								</div>
								<div className="object__item_footer">
									<p>Адрес:</p>
									<p>MARINA STAR, 14, AL SEBA STREET, DUBAI</p>
									<p>СРОК СДАЧИ: СЕНТЯБРЬ 2023 ГОДА</p>
								</div>
							</div>
							<div className="object__item foto__concept">
								<div className="object__item_header">
									<p>Concept 7 Residences </p>
									<p>Очень перспективный проект расположенный в новом активно развивающемся районе Jumeirah Village Circle</p>
								</div>
								<div className="object__item_footer">
									<p>Адрес:</p>
									<p>DUBAI JUMEIRAH VILLAGE CIRCLE DUBAI</p>
									<p>СРОК СДАЧИ: 2025 ГОД</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="fullscreen foto__container_two"></div>

			<div className="fullscreen text__container_about-developer">
				<div className="about-developer__content">
					<div className="flex__container">
						<h1>О застройщике</h1>
						<div className="text">
							<div className="text__container">
								<p>Компания Condor Group основана в 1980 году в Объединенных Арабских Эмиратах и специализируется на проектировании и строительстве престижных жилых и гостиничных проектов.</p>
								<p>Более 40 лет компания Condor создает роскошные здания, отели и больницы, которые органично вписываются в образ жизни людей, и имеет более 400 успешно завершенных проектов на Ближнем Востоке и в Азии.</p>
								<p>Портфолио проектов Condor включает технологически сложные и знаковые проекты для государственного сектора ОАЭ и других многонациональных корпораций.
								</p>
							</div>
						</div>
						<div className="descriprion">
							<div className="description__row">
								<div className="item__element">
									<p>400+</p>
									<p>Реализованных проектов</p>
								</div>
								<div className="item__element">
									<p>40+</p>
									<p>Опыт работы более сорока лет</p>
								</div>
								<div className="item__element">
									<p>1500+</p>
									<p>Сотрудников в разных странах</p>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

			<div className="fullscreen foto__container_three"></div>

			<ObjectsListComponentRu />

			<div className="fullscreen foto__container_four"></div>

			<ObjectCardComponentRu />

		</motion.div >
	)
}

export default HomePageRu;
