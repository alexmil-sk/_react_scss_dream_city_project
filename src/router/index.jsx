import { createBrowserRouter } from "react-router-dom";
import IntroPage from "/src/pages/IntroPage/IntroPage.jsx";
import NotFoundPage from "/src/pages/NotFoundPage/NotFoundPage.jsx";


import {
	LayoutRu,
	HomePageRu,
	ContactsPageRu,
	ObjectsPageRu,
	OurTeamRu,
	OurFotosRu,
	ObjectCardItemPageRu,
	FotosCardItemPage,
	SliderCardItemFotosComponent
} from "./router-ru.jsx";

import {
	LayoutSk,
	HomePageSk
} from "./router-sk.jsx";


import { loaderPosts } from "/src/pages/ru/ObjectsPageRu/ObjectsPageRu.jsx";
import { loaderPostItem } from "/src/js/loaderPostItem.js";

import ErrorBoundary from "../UI/ErrorBoundary/ErrorBoundary.jsx";


const router = createBrowserRouter([
	{
		path: "/",
		element: <IntroPage />,
	},
	{
		path: "*",
		element: <NotFoundPage />,
	},
	{
		path: "objects/:id/fotos/slider",
		element: <SliderCardItemFotosComponent />,
		errorElement: <ErrorBoundary />,
	},
	{
		path: "/ru",
		element: <LayoutRu />,
		children: [
			{
				path: "home",
				element: <HomePageRu />,
				loader: loaderPostItem,
				errorElement: <ErrorBoundary />,
			},
			{
				path: "contacts",
				loader: loaderPosts,
				errorElement: <ErrorBoundary />,
				element: <ContactsPageRu />,
				children: [
					{
						path: "fotos",
						loader: loaderPosts,
						element: <OurFotosRu />,
					},
					{
						path: "team",
						loader: loaderPosts,
						element: <OurTeamRu />,
					},
				],
			},
			{
				path: "objects",
				loader: loaderPosts,
				errorElement: <ErrorBoundary />,
				element: <ObjectsPageRu />,
			},
			{
				path: "objects/:id",
				element: <ObjectCardItemPageRu />,
				loader: loaderPostItem,
				errorElement: <ErrorBoundary />,
			},
			{
				path: "objects/:id/fotos",
				element: <FotosCardItemPage />,
				errorElement: <ErrorBoundary />,
			},
		],
	},
	{
		path: "/sk",
		element: <LayoutSk />,
		children: [
			{
				path: "home",
				element: <HomePageSk />,
			},
		],
	},
]);

export default router;
