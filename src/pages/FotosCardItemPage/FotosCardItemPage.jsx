import {Link, useLocation} from "react-router-dom";
import "./FotosCardItemPage.scss";
import {motion} from "framer-motion";
import {framerOpacityObjects} from "/src/js/animationFramerSettings.js";
import undo_arrow from "/src/svg/undo_arrow.svg";
import list from "/svg/list.svg";

function FotosCardItemPage() {
	const {state} = useLocation();
	const {objects, id} = state;

	return (
		<motion.div className="FotosCardItemPage" initial={"hidden"}
		            animate={"visible"} variants={framerOpacityObjects}>
			{/* ========Автофокусировка при загрузке страницы===================================== */}

			<input type="text" autoFocus style={{height: "6px"}}/>

			{/* ============================================= */}
			<div className="fotos__wrapper">
				<div className="fotos__button">
					<Link to={`/ru/objects/${id}`}>
						<img src={undo_arrow} alt="undo_arrow"/>
					</Link>
					<Link to="/ru/objects">
						<img src={list} alt="list"/>
					</Link>
				</div>

				<div className="fotos__container">
					{objects[id - 1].foto.map((item, idx) => (
						<Link
							// to={`/ru/objects/${id}/fotos/slider`}
							to={`/objects/${id}/fotos/slider`}
							className="foto__item"
							key={idx}
							state={{objects: objects[id - 1].foto, id}}
						>
							<img src={item} alt={item}/>
						</Link>
					))}
				</div>
			</div>
		</motion.div>
	)

}

export default FotosCardItemPage;
