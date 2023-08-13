//===СВОЙСТВА АНИМАЦИИ
//===(только при обновлении страницы.При переходе между страниц применять в теле каждой страницы)
//===============================================================


export const framerFallingDown = {
	visible: i => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.5,
			duration: 1.5,
			type: 'just',
			ease: 'linear'
		}
	}),
	hidden: {
		opacity: 0,
		y: -2000,
	}
}

export const framerOpacity = {
	visible: i => ({
		opacity: 1,
		transition: {
			delay: i * 0.5,
			duration: 1.5,
			type: 'just',
			ease: 'linear'
		}
	}),
	hidden: {
		opacity: 0,
	}
}

export const framerOpacityObjects = {
	visible: {
		opacity: 1,
		transition: {
			duration: .6,
			type: 'just',
			ease: 'linear'
		}
	},
	hidden: {
		opacity: 0,
	}
}