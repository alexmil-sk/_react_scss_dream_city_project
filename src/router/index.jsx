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
import AnimatedMenu from "/src/components/AnimatedMenu/AnimatedMenu.jsx";
import SortPage from "/src/pages/SortPage/SortPage.jsx";
import RequireAuth from "/src/hoc/RequireAuth.jsx";
import AuthProvider from "/src/hoc/AuthProvider.jsx";
import ErrorBoundary from "../UI/ErrorBoundary/ErrorBoundary.jsx";
import { motion } from "framer-motion";

//const framerVariants_1 = {
//	visible: {
//		opacity: 1,
//		y: 0
//	},
//	hidden: {
//		opacity: 0,
//		y: -2000
//	}
//}

const framerVariants_2 = {
	visible: i => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.5,
			duration: 1.5,
			type: 'just',
			ease: 'linear'
		}
	}),
	hidden: {
		opacity: 0,
		y: -2000,
	}
}


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
				element: <motion.div
					initial={'hidden'}
					animate={'visible'}
					whileHover={{ y: -20 }}
					variants={framerVariants_2}
				>
					<ContactsPage />
				</motion.div>,
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
				element: <PostsPage />,
				loader: loaderPosts,
				errorElement: <ErrorBoundary />,

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
				element: <SortPage />,
			},
			{
				path: "menu",
				element: <AnimatedMenu />
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
