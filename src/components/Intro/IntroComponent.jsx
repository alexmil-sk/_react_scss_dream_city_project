import { useState, useEffect } from "react";
import useSound from 'use-sound'; //https://reactjsexample.com/a-react-hook-for-playing-sound-effects/

import "./IntroComponent.scss";

import audio from "/videos/observation_outside.mp3";
import video from "/videos/observation_outside.mp4";
import videoWeb from "/videos/observation_outside.webm";
import soundOn from "/svg/sound_on.svg";
import soundOff from "/svg/sound_off.svg";



export default function IntroComponent() {

	const [play, { stop }] = useSound(audio);
	const [isPlayingMusic, setIsPlayingMusic] = useState(false);
	const [isPlayVideoOnScroll, setIsPlayVideoOnScroll] = useState(true);


	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY == 0) {
				if (isPlayingMusic === true) {
					setIsPlayingMusic(false);
					stop();
				} else {
					setIsPlayingMusic(false);
					setIsPlayVideoOnScroll(true);
				}
			} else {
				setIsPlayVideoOnScroll(false);
				stop();
			}
		});
	}, [stop, play, isPlayingMusic]);

	function soundHandlerOn() {
		setIsPlayingMusic(true);
		play();
	}

	function soundHandlerOff() {
		setIsPlayingMusic(false);
		stop();
	}

	return (<>
		{
			isPlayVideoOnScroll
				? (<div className="fullscreen media__container">

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
						<video
							preload="metadata"
							loop
							autoPlay
							muted
						>

							<source src={videoWeb} type="video/webm" />
							<source src={video} type="video/mp4" />
						</video>
					</div>
				</div>
				)
				: null
		}
	</>)
}
