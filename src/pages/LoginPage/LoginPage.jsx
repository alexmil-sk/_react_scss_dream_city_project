import { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import "./LoginPage.scss";
import useAuth from "/src/hook/useAuth.js";
import { motion, AnimatePresence } from "framer-motion"


function LoginPage() {

	const navigate = useNavigate();
	const location = useLocation();
	const { signin } = useAuth();

	const [isLogged, setIsLogged] = useState(true);

	const fromPage = location.state?.from?.pathname || "/";

	function handleSubmit(e) {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		signin(email, password, () => navigate(fromPage, { replace: true }))
	}


	const formMotionSettings = {
		hidden: {
			opacity: 0,
			y: 1000
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 1,
				duration: 3
			}
		},
		exit: {
			y: 1000,
			transition: {
				duration: 3
			}
		}
	}

	return (
		<AnimatePresence initial={true}>
			{
				isLogged && (
					<motion.div
						className="login"
						key="modal"
						initial='hidden'
						animate='visible'
						exit='exit'
						variants={formMotionSettings}
					>
						<div className="login__container">
							<div className="login__wrapper">
								<h1>Login Page</h1>
								<form onSubmit={handleSubmit}>
									<div className="email__container">
										<label htmlFor="email">Email</label>
										<input type="email" name="email" />
									</div>
									<div className="password__container">
										<label htmlFor="password">Password</label>
										<input type="password" name="password" />
									</div>
									<div className="block__btns">
										<button type="submit">send</button>
										<motion.button
											type="button"
											whileHover={{ opacity: .5 }}
											whileTap={{opacity: 1, color: 'yellow'}}
											onClick={() => setIsLogged(false)}
										>
											back
										</motion.button>
									</div>
								</form>
							</div>
						</div>
						
					</motion.div>
				)
			}
		</AnimatePresence>
	)
}

export default LoginPage;