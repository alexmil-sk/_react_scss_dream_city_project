import { useTransform, motion, useScroll } from 'framer-motion';
import { framerFallingDown } from "/src/js/animationFramerSettings.js";


export default function MenuStickerRu() {

	const { scrollY } = useScroll();

	const offsetY = [0, 300];
	const marginY = [0, 300];
	const heightHeader = [400, 140];
	const imageWidth = [300, 120];
	const titleSizes = ['4rem', '2rem'];


	return (
		<motion.div
			style={{
				position: 'relative',
				padding: '50px 0',
			}}
			initial={'hidden'}
			animate={'visible'}
			variants={framerFallingDown}
		>

			<motion.div
				className="section"
				style={{
					position: 'sticky',
					top: '70px',
					left: 0,
					padding: '0 50px',
					backgroundColor: '#ccc',
					height: useTransform(scrollY, offsetY, heightHeader),
				}}
			>
				<div
					style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}
				>
					<motion.img
						src="https://www.californialogodesigns.com/images/portfolio/3D-logo-design/4.gif"
						style={{
							margin: '20px',
							width: useTransform(scrollY, offsetY, imageWidth)
						}}
					/>
					<motion.h1
						style={{
							fontSize: useTransform(scrollY, offsetY, titleSizes),
							fontFamily: 'AdventPro Bold',
							margin: '0 20px' 
						}}>
						HEADER
					</motion.h1>
					<motion.button
						style={{
							marginLeft: 'auto',
							height: '50px',
							padding: "5px 20px",
							borderRadius: '1rem',
							backgroundColor: 'orange',
							fontFamily: 'AdventPro Bold',
							fontSize: '1.5rem',
							opacity: useTransform(scrollY, [0, 100], [0, 1])
						}}
					>
						Click me!
					</motion.button>
				</div>
				<motion.p
					style={{
						fontSize: '1.5rem',
						fontFamily: 'AdventPro Regular',
						opacity: useTransform(scrollY, [0, 300], [1, 0])
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugit facilis minus amet placeat, aut nam sed nobis impedit sunt. Autem dicta necessitatibus laborum officia, corrupti nisi ut deserunt explicabo?
				</motion.p>
				<motion.button
					style={{
						marginLeft: 'auto',
						height: '50px',
						padding: "5px 20px",
						borderRadius: '1rem',
						backgroundColor: 'orange',
						fontFamily: 'AdventPro Bold',
						fontSize: '1.5rem',
						opacity: useTransform(scrollY, [0, 100], [1, 0])

					}}
				>
					Click me!
				</motion.button>
			</motion.div>

			<motion.div
				className="section"
				style={{
					backgroundColor: 'maroon',
					minHeight: '600px',
					padding: "50px",
					fontSize: '30px',
					marginTop: useTransform(scrollY, offsetY, marginY),
				}}
			>
				<h1>Hello Menu Sticker</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, modi?</p>
			</motion.div>

			<div
				className="section"
				style={{
					backgroundColor: 'peru',
					minHeight: '600px',
					fontSize: '30px',
					padding: "50px",
				}}
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut iusto deserunt hic aspernatur quis maxime laborum aperiam modi repudiandae.
			</div>
		</motion.div>
	)
}

