import { useState } from "react";
import useSound from 'use-sound'; //https://reactjsexample.com/a-react-hook-for-playing-sound-effects/
import "./IntroPage.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { framerOpacity } from "/src/js/animationFramerSettings.js";


import audio from "/videos/intro/observation_outside.mp3";
import soundOn from "/svg/sound_on.svg";
import soundOff from "/svg/sound_off.svg";



export default function IntroComponent() {

	const [play, { stop }] = useSound(audio);
	const [isPlayingMusic, setIsPlayingMusic] = useState(false);

	function soundHandlerOn() {
		setIsPlayingMusic(true);
		play();
	}

	function soundHandlerOff() {
		setIsPlayingMusic(false);
		stop();
	}

	return (<>
		<motion.div
			className="media__container"
			initial={'hidden'}
			animate={'visible'}
			variants={framerOpacity}
		>

			<div className="audio__container">
				{
					isPlayingMusic
						? (<button className="audio__red" onClick={soundHandlerOff}>
							<img src={soundOff} alt="soundOff" />
						</button>)
						: (<button className="audio__green" onClick={soundHandlerOn}>
							<img src={soundOn} alt="soundOn" />
						</button>)
				}
			</div>
			<div className="video__container">
				{/*<img src="/images/intro/intro.jpg" alt="intro"/>*/}
			</div>
			<div className="text__container">
				<motion.h1
					initial={{ opacity: 0, y: -1000 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 3 }}
				>
					dreamcity group
				</motion.h1>
			</div>
			<div className="button__container">
				<motion.div
					initial={{ opacity: 0, y: 1000 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 3,
						delay: 0
					}}
				>
					<Link to="/ru/home"><span onClick={soundHandlerOff}>RU</span></Link>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 1000 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 3,
						delay: 1
					}}
				>
					<Link to="/sk/home" onClick={(e) => {soundHandlerOff(); e.preventDefault()}}><span>SK</span></Link>
				</motion.div>
			</div>
		</motion.div>
	</>)
}
