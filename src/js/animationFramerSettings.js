//===СВОЙСТВА АНИМАЦИИ
//===(только при обновлении страницы.При переходе между страниц применять в теле каждой страницы)
//===============================================================

export const framerFallingDown = {
	visible: i => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.1,
			duration: 2,
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

export const titleMotionSettings = {
	hidden: {
		y: -500
	},
	visible: {
		y: 0,
		transition: {
			delay: 0.5,
			duration: 1.5,
			type: 'just',
			ease: 'linear'
		}
	}
}

export const textMotionSettings = {
	hidden: {
		x: -2000
	},
	visible: {
		x: 0,
		transition: {
			delay: 2,
			duration: 1,
			type: 'just',
			ease: 'linear'
		}
	}
}

export const hrMotionSettings = {
	hidden: {
		x: -2000
	},
	visible: {
		x: 0,
		transition: {
			delay: 3.5,
			duration: 1,
			type: 'just',
			ease: 'linear'
		}
	}
}

export const ulMotionSettings = {
	hidden: {
		x: -1000
	},
	visible: {
		x: 0,
		transition: {
			delay: 4,
			duration: 1.5,
			type: 'just',
			ease: 'linear'
		}
	}
}

export const liMotionSettings = {
	hidden: {
		opacity: 1,
		x: -2000,
	},
	visible: (i) => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: i * 0.3,
			duration: 1.2,
			type: "just",
			ease: "linear",
		},
	}),
};