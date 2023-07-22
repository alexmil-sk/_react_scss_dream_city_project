import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.jsx";
import ObjectPage from "../pages/ObjectPage/ObjectPage.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "object",
		element: <ObjectPage />,
	},
	{
		path: "*",
		element: <NotFoundPage />
	}
]);

export default router;
