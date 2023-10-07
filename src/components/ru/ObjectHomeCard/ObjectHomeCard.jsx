/* eslint-disable react/prop-types */
import "./ObjectHomeCard.scss";

function ObjectHomeCard({ object }) {
	const { title, description_short, address, conditions, foto } = object;

	return (
		<div
			className="object__item"
			style={{
				//background: `url(${foto}) 0 0 / cover no-repeat`,
				background: foto.map((item) => `url(${item}) 0 0 / cover no-repeat`)
			}}
		>
			<div className="object__item_header">
				<p>{title}</p>
				<p>{description_short}</p>
			</div>
			<div className="object__item_footer">
				<p>Адреc:</p>
				<p>{address}</p>
				<p>{conditions}</p>
			</div>
		</div>
	);
}

export default ObjectHomeCard;