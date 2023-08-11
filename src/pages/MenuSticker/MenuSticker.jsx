import { useTransform, motion, useScroll, useMotionValueEvent } from 'framer-motion';


export default function MenuSticker() {

	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		console.log("Page scroll: ", latest)
	})



	return (
		<div style={{
			position: 'relative',
			padding: '100px 20px',
		}}>

			<div
				className="section"
				style={{
					backgroundColor: '#fff',
					minHeight: '30vh',
					fontSize: '30px'
				}}
			>
				<h1>Hello Coders</h1>
			</div>

			<div
				className="section"
				style={{
					backgroundColor: 'maroon',
					minHeight: '30vh',
					fontSize: '30px'
				}}
			>
				<h1>Hello Menu Sticker</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, modi?</p>
			</div>

			<div
				className="section"
				style={{
					backgroundColor: 'peru',
					minHeight: '30vh',
					fontSize: '30px'
				}}
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut iusto deserunt hic aspernatur quis maxime laborum aperiam modi repudiandae.
			</div>
		</div>
	)
}

