import { createBrowserRouter } from "react-router-dom";
import IntroPage from "/src/pages/IntroPage/IntroPage.jsx";
import NotFoundPage from "/src/pages/NotFoundPage/NotFoundPage.jsx";


import {
	LayoutRu,
	HomePageRu,
	ObjectPageSliderComponentRu,
	ContactsPageRu,
	PostsPageRu,
	PostItemPageRu,
	PostItemEditPageRu,
	CreatePostPageRu,
	OurTeamRu,
	OurFotosRu,
	MenuStickerRu,
	SortPageRu,
	TodosPageRu
} from "./router-ru.jsx";

import {
	LayoutSk,
	HomePageSk
} from "./router-sk.jsx";


import { loaderPosts } from "/src/pages/ru/PostsPageRu/PostsPageRu.jsx";
import { loaderPostItem } from "/src/pages/ru/PostItemPageRu/PostItemPageRu.jsx";
import { loaderEditPost, editPostAction } from "/src/pages/ru/PostItemEditPageRu/PostItemEditPageRu.jsx";
import { createPostAction } from "/src/pages/ru/CreatePostPageRu/CreatePostPageRu.jsx";

import ErrorBoundary from "../UI/ErrorBoundary/ErrorBoundary.jsx";


const router = createBrowserRouter([
	{
		path: "/",
		element: <IntroPage />
	},
	{
		path: "*",
		element: <NotFoundPage />
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
				path: "objects",
				element: <ObjectPageSliderComponentRu />,
			},
			{
				path: "contacts",
				element: <ContactsPageRu />,
				children: [
					{
						path: "fotos",
						element: <OurFotosRu />
					},
					{
						path: "team",
						element: <OurTeamRu />
					}
				]
			},
			{
				path: "posts",
				loader: loaderPosts,
				errorElement: <ErrorBoundary />,
				element: <PostsPageRu />
			},
			{
				path: "posts/:id",
				element: <PostItemPageRu />,
				loader: loaderPostItem,
				errorElement: <ErrorBoundary />,

			},
			{
				path: "posts/:id/edit",
				element: <PostItemEditPageRu />,
				loader: loaderEditPost,
				action: editPostAction,
				errorElement: <ErrorBoundary />,
			},
			{
				path: "posts/new",
				element: <CreatePostPageRu />,
				action: createPostAction,
				errorElement: <ErrorBoundary />,
			},
			{
				path: "sort",
				element: <SortPageRu />
			},
			{
				path: "menusticker",
				element: <MenuStickerRu />
			},
			{
				path: "todos",
				element: <TodosPageRu />
			},
		]
	},
	{
		path: "/sk",
		element: <LayoutSk />,
		children: [
			{
				path: "home",
				element: <HomePageSk />,
			},
		]
	}
]);

export default router;
