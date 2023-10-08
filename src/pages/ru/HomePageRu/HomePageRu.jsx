import { Link } from "react-router-dom";

import SliderComponent from "/src/components/SliderComponent/SliderComponent.jsx";
import "./HomePageRu.scss";
import { motion } from "framer-motion";
import { framerOpacity } from "/src/js/animationFramerSettings.js";
import ObjectHomeCard from "/src/components/ru/ObjectHomeCard/ObjectHomeCard";
import dbObjectCard from "/src/db/ru/dbObjectCard.json";


function HomePageRu() {
	return (
		<motion.div className="wrapper" initial={"hidden"} animate={"visible"} variants={framerOpacity}>
			<a href="#" className="up-to-title">
				<img src="/icons/arrow_upward.svg" />
			</a>
			{/* =========================== BLOCK-1 ================================= */}

			<div className="fullscreen foto__container_title">
				<div className="title__row">
					<div className="logo__item">
						<img src="/icons/logo_dcg.png" alt="logo_dcg" />
					</div>
					<h1>Элегантная городская жизнь</h1>
					<div className="undertitle">
						<Link to="#bratislava" reloadDocument>
							<p>братислава</p>
						</Link>
						<Link to="#slovakia" reloadDocument>
							<p>словакия</p>
						</Link>
						<Link to="#turkey" reloadDocument>
							<p>турция</p>
						</Link>
						<Link to="#spain" reloadDocument>
							<p>испания</p>
						</Link>
						<Link to="#emirates" reloadDocument>
							<p>оаэ (дубаи)</p>
						</Link>
					</div>
				</div>
			</div>
			{/* =========================== BLOCK-2 ================================= */}

			<SliderComponent />

			{/* =========================== BLOCK-3 ================================= */}

			<div id="bratislava" className="fullscreen text__container_projects bratislava">
				<div className="projects__content">
					<h1>
						Предлагаем вам к покупке недвижимость от застройщика <span>в братиславе</span>:
					</h1>

					<div className="objects">
						<div className="objects__row">
							{dbObjectCard
								.filter((i) => i.location.includes("Братислава"))
								.map((obj) => (
									<Link key={obj.id} to={`/ru/objects/${obj.id}`}>
										<ObjectHomeCard object={obj} />
									</Link>
								))}
						</div>
					</div>
				</div>
			</div>

			{/* =========================== BLOCK-4 ================================= */}

			<div className="fullscreen foto__container_one"></div>

			<div id="slovakia" className="fullscreen text__container_projects slovakia">
				<div className="projects__content">
					<h1>
						Предлагаем вам к покупке недвижимость от застройщика <span>на всей территории Словакии</span>:
					</h1>

					<div className="objects">
						<div className="objects__row">
							{dbObjectCard
								.filter((i) => i.location.includes("Словакия"))
								.map((obj) => (
									<Link key={obj.id} to={`/ru/objects/${obj.id}`}>
										<ObjectHomeCard object={obj} />
									</Link>
								))}
						</div>
					</div>
				</div>
			</div>

			{/* =========================== BLOCK-5 ================================= */}

			<div className="fullscreen foto__container_two"></div>

			{/* =========================== BLOCK-6 ================================= */}

			<div id="spain" className="fullscreen text__container_projects spain">
				<div className="projects__content">
					<h1>
						Предлагаем вам к покупке недвижимость от застройщика <span>в испании</span>:
					</h1>

					<div className="objects">
						<div className="objects__row">
							{dbObjectCard
								.filter((i) => i.location.includes("Испания"))
								.map((obj) => (
									<Link key={obj.id} to={`/ru/objects/${obj.id}`}>
										<ObjectHomeCard object={obj} />
									</Link>
								))}
						</div>
					</div>
				</div>
			</div>

			{/* =========================== BLOCK-7 ================================= */}

			<div className="fullscreen foto__container_three"></div>

			{/* =========================== BLOCK-7 ================================= */}

			<div id="emirates" className="fullscreen text__container_projects emirates">
				<div className="projects__content">
					<h1>
						Предлагаем вам к покупке недвижимость от застройщика <span>в ОАЭ (Дубаи)</span>:
					</h1>

					<div className="objects">
						<div className="objects__row">
							{dbObjectCard
								.filter((i) => i.location.includes("Дубаи"))
								.map((obj) => (
									<Link key={obj.id} to={`/ru/objects/${obj.id}`}>
										<ObjectHomeCard object={obj} />
									</Link>
								))}
						</div>
					</div>
				</div>
			</div>

			{/* =========================== BLOCK-8 ================================= */}

			<div className="fullscreen foto__container_four"></div>

			{/* =========================== BLOCK-7 ================================= */}

			<div id="turkey" className="fullscreen text__container_projects turkey">
				<div className="projects__content">
					<h1>
						Предлагаем вам к покупке недвижимость от застройщика <span>в Турции</span>:
					</h1>

					<div className="objects">
						<div className="objects__row">
							{dbObjectCard
								.filter((i) => i.location.includes("Турция"))
								.map((obj) => (
									<Link key={obj.id} to={`/ru/objects/${obj.id}`}>
										<ObjectHomeCard object={obj} />
									</Link>
								))}
						</div>
					</div>
				</div>
			</div>

			{/* =========================== BLOCK-9 ================================= */}

			<div className="fullscreen foto__container_five"></div>
		</motion.div>
	);
}

export default HomePageRu;
