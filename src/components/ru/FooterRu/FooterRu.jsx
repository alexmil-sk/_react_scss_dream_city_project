/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./FooterRu.scss";
import moment from "moment";

moment.locale('ru', {
	months: 'Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь'.split('_'),
	weekdays: 'Понедельник_Вторник_Среда_Четверг_Пятница_Суббота_Воскресенье'.split('_')
})
moment.locale('ru');

function FooterRu({ isActiveHeader }) {

	const [sec, setSec] = useState(new Date().getSeconds());
	let secund = sec > 9 ? sec : `0${sec}`;

	useEffect(() => {
		const timer = setInterval(() => {	setSec(new Date().getSeconds());}, 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className={`footer ${isActiveHeader && 'loaded'}`}>
			<div className="footer__container">
				<div className="footer__row">
					<div
						className="footer__text"
					>
						<span>DreamCity &nbsp;</span>
						<span>
							{
								moment().format(`YYYY / MMMM, Do / dddd / a h:mm:${secund}`)
							}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FooterRu;