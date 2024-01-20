import {Link, useLoaderData} from "react-router-dom";

import SliderHomeComponent from "/src/components/SliderHomeComponent/SliderHomeComponent.jsx";
import "./HomePageRu.scss";
import {motion} from "framer-motion";
import {framerOpacity} from "/src/js/animationFramerSettings.js";
import ObjectHomeCard from "/src/components/ru/ObjectHomeCard/ObjectHomeCard";
import arrow_upward from "/svg/arrow_upward.svg";
import logo_dcg from "/svg/logo_dcg.png";

const location = [
	{name: "братислава", link: "#bratislava"},
	{name: "словакия", link: "#slovakia"},
	{name: "испания", link: "#spain"},
	{name: "оаэ (дубаи)", link: "#emirates"}
];

function MyObjectLink() {
	return (
		<div className="objects__link">
			<Link to="/ru/objects">
				<span>больше объектов</span>
			</Link>
		</div>
	);
}

function HomePageRu() {
	const {objects} = useLoaderData();


	return (
		<motion.div className="wrapper" initial={"hidden"} animate={"visible"} variants={framerOpacity}>
			<a href="#" className="up-to-title">
				<img src={arrow_upward} alt="arrow_upward"/>
			</a>
			{/* =========================== BLOCK-1 ================================= */}

			<div className="fullscreen foto__container_title">
				<div className="title__row">
					<div className="logo__item">
						<img src={logo_dcg} alt="logo_dcg"/>
					</div>
					<h1>Элегантная городская жизнь</h1>
					<div className="under-title">
						{location.map((item, idx) => (
								<Link
									to={item.link}
									reloadDocument key={idx}
								>
									<p>
										{item.name}
									</p>
								</Link>
							))}
					</div>
				</div>
			</div>
			{/* =========================== BLOCK-2 ================================= */}

			<SliderHomeComponent/>

			{/* =========================== BLOCK-3 ================================= */}

			<div className="fullscreen foto__container_four"></div>

			{/* =========================== BLOCK-4 ================================= */}

			<div id="bratislava" className="fullscreen text__container_projects bratislava">
				<div className="projects__content">
					<h1>
						Предлагаем вам к покупке недвижимость от застройщика <span>в братиславе</span>:
					</h1>

					<div className="objects">
						<div className="objects__row">
							{objects
								.filter((i) => i.location.includes("Братислава"))
								.map((obj) => (<Link key={obj.id} to={`/ru/objects/${obj.id}`}>
									<ObjectHomeCard object={obj}/>
								</Link>))}
						</div>
					</div>
					<MyObjectLink/>
				</div>
			</div>

			{/* =========================== BLOCK-5 ================================= */}

			<div className="fullscreen foto__container_one"></div>

			<div id="slovakia" className="fullscreen text__container_projects slovakia">
				<div className="projects__content">
					<h1>
						Предлагаем вам к покупке недвижимость от застройщика <span>на всей территории Словакии</span>:
					</h1>

					<div className="objects">
						<div className="objects__row">
							{objects
								.filter((i) => i.location.includes("Словакия"))
								.map((obj) => (<Link key={obj.id} to={`/ru/objects/${obj.id}`}>
									<ObjectHomeCard object={obj}/>
								</Link>))}
						</div>
					</div>
					<MyObjectLink/>
				</div>
			</div>

			{/* =========================== BLOCK-6 ================================= */}

			<div className="fullscreen foto__container_two"></div>

			{/* =========================== BLOCK-7 ================================= */}

			<div id="spain" className="fullscreen text__container_projects spain">
				<div className="projects__content">
					<h1>
						Предлагаем вам к покупке недвижимость от застройщика <span>в испании</span>:
					</h1>

					<div className="objects">
						<div className="objects__row">
							{objects
								.filter((i) => i.location.includes("Испания"))
								.map((obj) => (<Link key={obj.id} to={`/ru/objects/${obj.id}`}>
									<ObjectHomeCard object={obj}/>
								</Link>))}
						</div>
					</div>
					<MyObjectLink/>
				</div>
			</div>

			{/* =========================== BLOCK-8 ================================= */}

			<div className="fullscreen foto__container_three"></div>

			{/* =========================== BLOCK-9 ================================= */}

			<div id="emirates" className="fullscreen text__container_projects emirates">
				<div className="projects__content">
					<h1>
						Предлагаем вам к покупке недвижимость от застройщика <span>в ОАЭ (Дубаи)</span>:
					</h1>

					<div className="objects">
						<div className="objects__row">
							{objects
								.filter((i) => i.location.includes("Дубаи"))
								.map((obj) => (<Link key={obj.id} to={`/ru/objects/${obj.id}`}>
									<ObjectHomeCard object={obj}/>
								</Link>))}
						</div>
					</div>
					<MyObjectLink/>
				</div>
			</div>

			{/* =========================== BLOCK-10 ================================= */}

			<div className="fullscreen foto__container_five"></div>
		</motion.div>
	);
}

export default HomePageRu;
