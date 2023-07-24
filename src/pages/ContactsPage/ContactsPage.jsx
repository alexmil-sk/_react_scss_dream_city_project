import "./ContactsPage.scss";
import CastomLink from "/src/UI/CastomLinkUI/CastomLinkUI.jsx";


function ContactsPage() {
	return (
		<div className="contacts">
			<div className="contacts__container">
				<div className="contacts__title">Contacts</div>

				<div className="contacts__text">
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore ipsa hic, expedita doloribus amet nesciunt debitis ad soluta earum corporis quam nihil illum voluptates tenetur possimus nulla culpa repellendus suscipit non quod! Quos assumenda asperiores quas exercitationem vel animi nesciunt, ducimus eum. Veniam magnam aperiam aliquam impedit! Molestiae vero dignissimos quia. Ipsam fuga voluptatum ducimus, sed facere error itaque nulla totam quo soluta officiis quam natus expedita dicta et eius numquam doloremque. Perferendis nam fugit neque dolorem commodi enim. Tenetur suscipit asperiores incidunt tempora maxime, quis, voluptatum sed fugit ad nihil nulla voluptas ex vel, error laudantium et voluptatem modi.</p>
				</div>

				<CastomLink to="/home">To the Home page</CastomLink>
			</div>
		</div>
	)
}

export default ContactsPage;