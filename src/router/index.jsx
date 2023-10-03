import { createBrowserRouter } from "react-router-dom";
import IntroPage from "/src/pages/IntroPage/IntroPage.jsx";
import NotFoundPage from "/src/pages/NotFoundPage/NotFoundPage.jsx";


import {
	LayoutRu,
	HomePageRu,
	ObjectPageSliderComponentRu,
	ContactsPageRu,
	PostsPageRu,
	OurTeamRu,
	OurFotosRu,
	SortPageRu,
	ObjectCardItemPageRu,
} from "./router-ru.jsx";

import {
	LayoutSk,
	HomePageSk
} from "./router-sk.jsx";


import { loaderPosts } from "/src/pages/ru/PostsPageRu/PostsPageRu.jsx";
import { loaderPostItem } from "/src/pages/ru/ObjectCardItemPageRu/ObjectCardItemPageRu.jsx";

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
		path: "/ru",
		element: <LayoutRu />,
		children: [
			{
				path: "home",
				element: <HomePageRu />,
			},
			{
				path: "blocks",
				element: <ObjectPageSliderComponentRu />,
			},
			{
				path: "contacts",
				element: <ContactsPageRu />,
				children: [
					{
						path: "fotos",
						element: <OurFotosRu />,
					},
					{
						path: "team",
						element: <OurTeamRu />,
					},
				],
			},
			{
				path: "objects",
				loader: loaderPosts,
				errorElement: <ErrorBoundary />,
				element: <PostsPageRu />,
			},
			{
				path: "objects/:id",
				element: <ObjectCardItemPageRu />,
				loader: loaderPostItem,
				errorElement: <ErrorBoundary />,
			},
			{
				path: "sort",
				element: <SortPageRu />,
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
