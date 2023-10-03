import { Link } from "react-router-dom";

import SliderComponentRu from "/src/components/ru/SliderComponentRu/SliderComponentRu.jsx";
import "./HomePageRu.scss";
import { motion } from "framer-motion";
import { framerOpacity } from "/src/js/animationFramerSettings.js";
import ObjectHomeCard from "/src/components/ru/ObjectHomeCard/ObjectHomeCard";
import { dbObjectCard } from "/src/db/ru/dbObjectCard.js";

function HomePageRu() {
	return (
		<motion.div className="wrapper" initial={"hidden"} animate={"visible"} variants={framerOpacity}>
			{/* =========================== BLOCK-1 ================================= */}

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

			{/* =========================== BLOCK-2 ================================= */}

			<div className="fullscreen text__container_projects">
				<div className="projects__content">
					<h1>
						Предлагаем вам к покупке недвижимость от застройщика <span>в братиславе</span>:
					</h1>

					<div className="objects">
						<div className="objects__row">
							{/* ============================================================ */}

							{dbObjectCard.map((obj) => (
								<Link key={obj.id} to={`/ru/objects/${obj.id}`} >
									<ObjectHomeCard object={obj} />
								</Link>
							))}

							{/* ============================================================ */}
						</div>
					</div>
				</div>
			</div>

			{/* =========================== BLOCK-3 ================================= */}

			<SliderComponentRu />

			{/* =========================== BLOCK-4 ================================= */}

			<div className="fullscreen text__container_projects">
				<div className="projects__content">
					<h1>
						Предлагаем вам к покупке недвижимость от застройщика <span>на всей территории Словакии</span>:
					</h1>

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

			{/* =========================== BLOCK-5 ================================= */}

			<div className="fullscreen foto__container_one"></div>

			{/* =========================== BLOCK-6 ================================= */}

			<div className="fullscreen text__container_about-developer">
				<div className="about-developer__content">
					<div className="flex__container">
						<h1>О застройщике</h1>
						<div className="text">
							<div className="text__container">
								<p>
									Компания Condor Group основана в 1980 году в Объединенных Арабских Эмиратах и специализируется на
									проектировании и строительстве престижных жилых и гостиничных проектов.
								</p>
								<p>
									Более 40 лет компания Condor создает роскошные здания, отели и больницы, которые органично вписываются в образ
									жизни людей, и имеет более 400 успешно завершенных проектов на Ближнем Востоке и в Азии.
								</p>
								<p>
									Портфолио проектов Condor включает технологически сложные и знаковые проекты для государственного сектора ОАЭ и
									других многонациональных корпораций.
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

			{/* =========================== BLOCK-7 ================================= */}

			<div className="fullscreen foto__container_two"></div>

			{/* <div className="fullscreen foto__container_three"></div> */}

			{/* <div className="fullscreen foto__container_four"></div> */}
		</motion.div>
	);
}

export default HomePageRu;
