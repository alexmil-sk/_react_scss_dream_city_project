import { useState } from "react";
import './GalleryComponentSk.scss';

function GalleryComponentSk() {

	const [font, setFont] = useState(1);

	const styleFont = {
		title: {
			fontSize: font <= 1 ? '1.7rem' : 0.7 + font + 'rem',
			lineHeight: 1.2
		},
		sub_title: {
			fontSize: font <= 1 ? '1.4rem' : 0.4 + font + 'rem',
			lineHeight: 1.2
		},
		text: {
			fontSize: font <= 1 ? '1.1rem' : 0.1 + font + 'rem',
			lineHeight: 1.2
		}
	}


	function getFontLarge() {
		setFont(prev => prev + 0.1);
	}
	function getFontSmall() {
		setFont(prev => prev - 0.1);
	}


	return (
		<div className="fullscreen flex">
			<div className="gallery" >
				<div className="fonts__buttons">
					<button
						className={font <= 1 ? 'disabled' : null}
						onClick={getFontSmall}
					>a</button>
					<button
						className={font >= 2 ? 'disabled' : null}
						onClick={getFontLarge}
					>A</button>
				</div>
				<div className="content">
					<div className="residence">
						<div className="container">
							<div className="residence__row">
								<div className="residence__body">
									<div
										style={styleFont.title}
										className="residence__title"
									>
										Lorem, ipsum dolor.
									</div>
									<ul
										style={styleFont.text}
										className="residence__list"
									>
										<li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae necessitatibus, repellendus ea nihil, quia modi officia mollitia laborum hic at autem cum perferendis laudantium debitis. Itaque labore aut consequuntur debitis?</li>
										<li>Lorem ipsum dolor sit amet.</li>
										<li>Lorem ipsum dolor sit amet consectetur.</li>
										<li>Lorem ipsum dolor sit.</li>
										<li>Lorem, ipsum dolor.</li>
										<li>Lorem ipsum dolor sit amet.</li>
									</ul>
								</div>
								<div className="residence__image">
									<img src="/images/residence.webp" alt="popular_residence_img" />
								</div>
							</div>
						</div>
					</div>
					<div className="plans">
						<div className="container">
							<div
								style={styleFont.title}
								className="plans__title title"
							>
								Lorem ipsum dolor sit.
							</div>
							<div className="plans__row">
								<div className="plans__column">
									<div className="plans__item item">
										<div className="item__row">
											<div className="item__image">
												<img src="/plans/plan-1.jpg" alt="" />
											</div>
											<div className="item__body">
												<div
													style={styleFont.sub_title}
													className="item__title"
												>Lorem ipsum dolor sit.</div>
												<div
													style={styleFont.text}
													className="item__text"
												>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et saepe hic reprehenderit quo iusto corporis magni voluptatibus odio dicta vero ipsum enim quam culpa eaque, adipisci tempore accusantium similique.</div>
											</div>
										</div>
									</div>
								</div>

								<div className="plans__column">
									<div className="plans__item item">
										<div className="item__row">
											<div className="item__image">
												<img src="/plans/plan-1.jpg" alt="plan-1" />
											</div>
											<div className="item__body">
												<div
													style={styleFont.sub_title}
													className="item__title"
												>Lorem ipsum dolor sit.</div>
												<div
													style={styleFont.text}
													className="item__text"
												>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et saepe hic reprehenderit quo iusto corporis magni voluptatibus odio dicta vero ipsum enim quam culpa eaque, adipisci tempore accusantium similique.</div>
											</div>
										</div>
									</div>
								</div>

								<div className="plans__column">
									<div className="plans__item item">
										<div className="item__row">
											<div className="item__image">
												<img src="/plans/plan-1.jpg" alt="" />
											</div>
											<div className="item__body">
												<div
													style={styleFont.sub_title}
													className="item__title"
												>Lorem ipsum dolor sit.</div>
												<div
													style={styleFont.text}
													className="item__text"
												>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et saepe hic reprehenderit quo iusto corporis magni voluptatibus odio dicta vero ipsum enim quam culpa eaque, adipisci tempore accusantium similique.</div>
											</div>
										</div>
									</div>
								</div>

								<div className="plans__column">
									<div className="plans__item item">
										<div className="item__row">
											<div className="item__image">
												<img src="/plans/plan-1.jpg" alt="" />
											</div>
											<div className="item__body">
												<div
													style={styleFont.sub_title}
													className="item__title"
												>Lorem ipsum dolor sit.</div>
												<div
													style={styleFont.text}
													className="item__text"
												>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et saepe hic reprehenderit quo iusto corporis magni voluptatibus odio dicta vero ipsum enim quam culpa eaque, adipisci tempore accusantium similique.</div>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>

					<div className="cards">
						<div className="container">
							<div
								style={styleFont.title}
								className="cards__title title"
							>
								Lorem ipsum dolor sit amet.
							</div>
							<div className="inner__container">
								<div className="cards__row">

									<div className="card__column">
										<div className="card__item item">
											<div
												style={styleFont.text}
												className="item__lable"
											>Object name</div>
											<div
												style={styleFont.sub_title}
												className="item__subtitle"
											>Concord</div>
											<div className="item__text" style={styleFont.text}>
												<p>
													Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem tempore numquam nobis vero natus a nam veniam quasi voluptas nesciunt?
												</p>
											</div>
											<a href="#" className="item__btn">More...</a>
										</div>
									</div>

									<div className="card__column">
										<div className="card__item item">
											<div
												style={styleFont.text}
												className="item__lable"
											>Object name</div>
											<div
												style={styleFont.sub_title}
												className="item__subtitle"
											>Concord</div>
											<div className="item__text" style={styleFont.text}>
												<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem tempore numquam nobis vero natus a nam veniam quasi voluptas nesciunt?</p>
												<p>Quidem tempore numquam nobis vero natus a nam veniam quasi voluptas nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
											</div>
											<a href="#" className="item__btn">More...</a>
										</div>
									</div>

									<div className="card__column">
										<div className="card__item item">
											<div
												style={styleFont.text}
												className="item__lable"
											>Object name</div>
											<div
												style={styleFont.sub_title}
												className="item__subtitle"
											>Concord</div>
											<div className="item__text" style={styleFont.text}>
												<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem tempore numquam nobis vero natus a nam veniam quasi voluptas nesciunt?</p>
											</div>
											<a href="#" className="item__btn">More...</a>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GalleryComponentSk;