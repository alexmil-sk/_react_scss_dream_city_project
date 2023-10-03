import { Link } from "react-router-dom";

import SliderComponentRu from "/src/components/ru/SliderComponentRu/SliderComponentRu.jsx";
import "./HomePageRu.scss";
import { motion } from "framer-motion";
import { framerOpacity } from "/src/js/animationFramerSettings.js";
import ObjectHomeCard from "/src/components/ru/ObjectHomeCard/ObjectHomeCard";
import dbObjectCard from "/src/db/ru/dbObjectCard.json";

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
						<p>турция</p>
						<p>испания</p>
						<p>оаэ (дубаи)</p>
					</div>
				</div>
			</div>

			{/* =========================== BLOCK-2 ================================= */}

			<div className="fullscreen text__container_projects bratislava">
				<div className="projects__content">
					<h1>
						Предлагаем вам к покупке недвижимость от застройщика <span>в братиславе</span>:
					</h1>

					<div className="objects">
						<div className="objects__row">
							{/* ============================================================ */}

							{dbObjectCard
								.filter((i) => i.location === "Братислава")
								.map((obj) => (
									<Link key={obj.id} to={`/ru/objects/${obj.id}`}>
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

			<div className="fullscreen text__container_projects slovakia">
				<div className="projects__content">
					<h1>
						Предлагаем вам к покупке недвижимость от застройщика <span>на всей территории Словакии</span>:
					</h1>

					<div className="objects">
						<div className="objects__row">
							{/* ============================================================ */}

							{dbObjectCard
								.filter((i) => i.location === "Словакия")
								.map((obj) => (
									<Link key={obj.id} to={`/ru/objects/${obj.id}`}>
										<ObjectHomeCard object={obj} />
									</Link>
								))}

							{/* ============================================================ */}
						</div>
					</div>
				</div>
			</div>

			{/* =========================== BLOCK-5 ================================= */}

			<div className="fullscreen foto__container_one"></div>

			{/* =========================== BLOCK-6 ================================= */}

			<div className="fullscreen text__container_projects">
				<div className="projects__content">
					<h1>
						Предлагаем вам к покупке недвижимость от застройщика <span>в испании</span>:
					</h1>

					<div className="objects">
						<div className="objects__row">
							{/* ============================================================ */}

							{dbObjectCard
								.filter((i) => i.location === "Испания")
								.map((obj) => (
									<Link key={obj.id} to={`/ru/objects/${obj.id}`}>
										<ObjectHomeCard object={obj} />
									</Link>
								))}

							{/* ============================================================ */}
						</div>
					</div>
				</div>
			</div>

			{/* =========================== BLOCK-7 ================================= */}

			<div className="fullscreen foto__container_two"></div>

			<div className="fullscreen text__container_projects">
				<div className="projects__content">
					<h1>
						Предлагаем вам к покупке недвижимость от застройщика <span>в ОАЭ (Дубаи)</span>:
					</h1>

					<div className="objects">
						<div className="objects__row">
							{/* ============================================================ */}

							{dbObjectCard
								.filter((i) => i.location === "Дубаи")
								.map((obj) => (
									<Link key={obj.id} to={`/ru/objects/${obj.id}`}>
										<ObjectHomeCard object={obj} />
									</Link>
								))}

							{/* ============================================================ */}
						</div>
					</div>
				</div>
			</div>

			{/* =========================== BLOCK-8 ================================= */}

			<div className="fullscreen foto__container_two"></div>

			<div className="fullscreen text__container_projects">
				<div className="projects__content">
					<h1>
						Предлагаем вам к покупке недвижимость от застройщика <span>в Турции</span>:
					</h1>

					<div className="objects">
						<div className="objects__row">
							{/* ============================================================ */}

							{dbObjectCard
								.filter((i) => i.location === "Турция")
								.map((obj) => (
									<Link key={obj.id} to={`/ru/objects/${obj.id}`}>
										<ObjectHomeCard object={obj} />
									</Link>
								))}

							{/* ============================================================ */}
						</div>
					</div>
				</div>
			</div>

			{/* =========================== BLOCK-9 ================================= */}

			<div className="fullscreen foto__container_three"></div>

			{/* <div className="fullscreen foto__container_four"></div> */}
		</motion.div>
	);
}

export default HomePageRu;
