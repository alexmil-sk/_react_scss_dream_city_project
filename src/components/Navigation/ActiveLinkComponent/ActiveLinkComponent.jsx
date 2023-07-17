
function ActiveLinkComponent({ isActive, link, getActiveLink }) {
	return (
		<div
			data-name={link}
			style={isActive ? { color: 'yellow' } : null}
			className='menu__link'
			onClick={getActiveLink}
		>
			{link}
		</div>
	)
}

export default ActiveLinkComponent;