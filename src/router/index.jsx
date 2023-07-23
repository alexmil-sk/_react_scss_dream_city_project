import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.jsx";
import ObjectPage from "../pages/ObjectPage/ObjectPage.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
import IntroPage from "../pages/IntroPage/IntroPage.jsx";
import ContactsPage from "../pages/ContactsPage/ContactsPage.jsx";
import ParamsPage from "/src/pages/ParamsPage/ParamsPage.jsx";
import ParamsIdPage from "/src/pages/ParamsIdPage/ParamsIdPage.jsx";
import Layout from "../components/Layout/Layout.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <IntroPage />
			},
			{
				path: "home",
				element: <HomePage />,
			},
			{
				path: "objects",
				element: <ObjectPage />,
			},
			{
				path: "contacts",
				element: <ContactsPage />,
			},
			{
				path: "params",
				element: <ParamsPage />,
			},
			{
				path: "params/:id",
				element: <ParamsIdPage />,
			},
			{
				path: "*",
				element: <NotFoundPage />
			}
		]
	},
]);





export default router;
