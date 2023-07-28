import "./ContactsPage.scss";
import CastomLink from "/src/UI/CastomLinkUI/CastomLinkUI.jsx";
import { Link, Outlet } from "react-router-dom";


function ContactsPage() {
	return (
		<div className="contacts">
			<div className="contacts__container">
				<div className="title">Contacts</div>

				<div className="text">
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore ipsa hic, expedita doloribus amet nesciunt debitis ad soluta earum corporis quam nihil illum voluptates tenetur possimus nulla culpa repellendus suscipit non quod! Quos assumenda asperiores quas exercitationem vel animi nesciunt, ducimus eum. Veniam magnam aperiam aliquam impedit! Molestiae vero dignissimos quia. Ipsam fuga voluptatum ducimus, sed facere error itaque nulla totam quo soluta officiis quam natus expedita dicta et eius numquam doloremque. Perferendis nam fugit neque dolorem commodi enim. Tenetur suscipit asperiores incidunt tempora maxime, quis, voluptatum sed fugit ad nihil nulla voluptas ex vel, error laudantium et voluptatem modi.</p>
				</div>

				<ul>
					<li><Link to="fotos">Our Fotos</Link></li>
					<li><Link to="team">Our Team</Link></li>
					<li><CastomLink to="/home">To the Home page</CastomLink></li>
					<li><Link to="/contacts">Close Nested Pages x</Link></li>
				</ul>


				<Outlet />

			</div>
		</div>
	)
}

export default ContactsPage;