import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import ObjectPage from "../pages/ObjectPage/ObjectPage.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
import IntroPage from "../pages/IntroPage/IntroPage.jsx";
import ContactsPage from "../pages/ContactsPage/ContactsPage.jsx";
import PostsPage from "/src/pages/PostsPage/PostsPage.jsx";
import PostItemPage from "/src/pages/PostItemPage/PostItemPage.jsx";
import PostItemEditPage from "/src/pages/PostItemEditPage/PostItemEditPage.jsx";
import CreatePostPage from "/src/pages/CreatePostPage/CreatePostPage.jsx";
import LoginPage from "/src/pages/LoginPage/LoginPage.jsx";
import RequireAuth from "/src/hoc/RequireAuth.jsx";
import AuthProvider from "/src/hoc/AuthProvider.jsx";


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
			},
			{
				path: "posts",
				element: <PostsPage />,
			},
			{
				path: "posts/:id",
				element: <PostItemPage />,
			},
			{
				path: "posts/:id/edit",
				element: <RequireAuth><PostItemEditPage /></RequireAuth>,
			},
			{
				path: "posts/new",
				element: <RequireAuth><CreatePostPage /></RequireAuth>,
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
