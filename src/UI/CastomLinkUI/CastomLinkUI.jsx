import "./CastomLinkUI.scss";
import { Link, useMatches } from "react-router-dom";

function CastomLinkUI({ children, to, ...props }) {

	const match = useMatches({
		path: to,
		end: to.length === 1 ,
	});
	
	//console.log('match: ', match);

	return (
		<Link
			to={to}
			{...props}
			style={{color: match ? 'green' : 'red'}}
		>
			{children}
		</Link>
	)
}

export default CastomLinkUI;