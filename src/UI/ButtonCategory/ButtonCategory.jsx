import "/src/styles/index.scss";
import "./ButtonCategory.scss";


const btnStyle = {
	common: {
		fontSize: '1.3rem',
		lineHeight: '1.2',
		borderRadius: '5px',
		margin: '10px',
		outline: 'none',
		padding: '10px 20px',
		cursor: 'pointer',
		transition: 'all 400ms linear',
	},
	backgroundColorActive: {
		fontFamily: "AdventPro Bold",
		backgroundColor: '#ffb6a3',
		color: 'red',
		border: '1px solid red',
	},
	backgroundColorNotActive: {
		fontFamily: "AdventPro Regular",
		backgroundColor: '#f1f1f1',
		color: '#000',
		border: '1px solid black',
	},
}

const stylesNotActive = Object.assign({}, btnStyle.common, btnStyle.backgroundColorNotActive);
const stylesActive = Object.assign({}, btnStyle.common, btnStyle.backgroundColorActive);


function ButtonCategory({ text, handleClick = Function.prototype, selected }) {


	return (
		<button
			style={text === selected ? stylesActive : stylesNotActive}
			onClick={handleClick}
		>
			<span>{text}</span>

		</button>
	)
}

export default ButtonCategory;