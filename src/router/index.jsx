import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import ObjectPage from "../pages/ObjectPage/ObjectPage.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
import IntroPage from "../pages/IntroPage/IntroPage.jsx";
import ContactsPage from "../pages/ContactsPage/ContactsPage.jsx";
import PostsPage, { loaderPosts } from "/src/pages/PostsPage/PostsPage.jsx";
import PostItemPage, { loaderPostItem } from "/src/pages/PostItemPage/PostItemPage.jsx";
import PostItemEditPage, { loaderEditPost, editPostAction } from "/src/pages/PostItemEditPage/PostItemEditPage.jsx";
import CreatePostPage, { createPostAction } from "/src/pages/CreatePostPage/CreatePostPage.jsx";
import LoginPage from "/src/pages/LoginPage/LoginPage.jsx";
import OurTeam from "/src/pages/OurTeam/OurTeam.jsx";
import OurFotos from "/src/pages/OurFotos/OurFotos.jsx";
import Menu from "/src/pages/Menu/Menu.jsx";
import MenuSticker from "/src/pages/MenuSticker/MenuSticker.jsx";
import SortPage from "/src/pages/SortPage/SortPage.jsx";
import TodosPage from "/src/pages/TodosPage/TodosPage.jsx";
import RequireAuth from "/src/hoc/RequireAuth.jsx";
import AuthProvider from "/src/hoc/AuthProvider.jsx";
import ErrorBoundary from "../UI/ErrorBoundary/ErrorBoundary.jsx";


const router = createBrowserRouter([
	{
		path: "/",
		element: <AuthProvider><Layout /></AuthProvider>,
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
				children: [
					{
						path: "fotos",
						element: <OurFotos />
					},
					{
						path: "team",
						element: <OurTeam />
					}
				]
			},
			{
				path: "posts",
				loader: loaderPosts,
				errorElement: <ErrorBoundary />,
				element: <PostsPage />
			},
			{
				path: "posts/:id",
				element: <PostItemPage />,
				loader: loaderPostItem,
				errorElement: <ErrorBoundary />,

			},
			{
				path: "posts/:id/edit",
				element: <RequireAuth><PostItemEditPage /></RequireAuth>,
				loader: loaderEditPost,
				action: editPostAction,
				errorElement: <ErrorBoundary />,
			},
			{
				path: "posts/new",
				element: <RequireAuth><CreatePostPage /></RequireAuth>,
				action: createPostAction,
				errorElement: <ErrorBoundary />,
			},
			{
				path: "sort",
				element: <SortPage />
			},
			{
				path: "menu",
				element: <Menu />
			},
			{
				path: "menusticker",
				element: <MenuSticker />
			},
			{
				path: "todos",
				element: <TodosPage />
			},
			{
				path: "login",
				element: <LoginPage />,
			},
			{
				path: "*",
				element: <NotFoundPage />
			}
		]
	},
]);





export default router;
