import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.jsx";
import ObjectPage from "../pages/ObjectPage/ObjectPage.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "object",
		element: <ObjectPage />,
	},
]);

export default router;
