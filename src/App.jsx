import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/Error";
import RootLayout from "./pages/Root/Root";

import GeneralRootLayout from "./pages/Root/GeneralRoot";

import HomePage from "./pages/Home/Home";

import Owners, { action as ownerAction } from "./pages/Owners/Owners";
import OwnerDetailPage from "./pages/Owners/OwnerDetail";
import EditOwner from "./pages/Owners/EditOwner";
import NewOwner from "./pages/Owners/NewOwner";

import SignUp, { action as signUpAction } from "./pages/Auth/SignUp";
import Login, { action as loginAction } from "./pages/Auth/Login";

import { action as logoutAction } from "./pages/Logout/Logout";

import { tokenLoader } from "./util/auth.js";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		id: "root",
		loader: tokenLoader,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "owners",
				element: <GeneralRootLayout />,
				children: [
					{
						index: true,
						element: <Owners />,
						action: ownerAction,
					},
					{
						path: ":ownerId",
						id: "owner-detail",
						children: [
							{
								index: true,
								element: <OwnerDetailPage />,
							},
							{
								path: "edit",
								element: <EditOwner />,
							},
						],
					},
					{
						path: "new",
						element: <NewOwner />,
					},
				],
			},
			{
				path: "auth",
				children: [
					{
						path: "login",
						element: <Login />,
						action: loginAction,
					},
					{
						path: "signup",
						element: <SignUp />,
						action: signUpAction,
					},
				],
			},
			{
				path: "/logout",
				action: logoutAction,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
