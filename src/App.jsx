import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root/Root";
import HomePage from "./pages/Home/Home";

import GeneralRootLayout from "./pages/Root/GeneralRoot";
import Owners from "./pages/Owners/Owners";
import OwnerDetailPage from "./pages/Owners/OwnerDetail";
import EditOwner from "./pages/Owners/EditOwner";
import NewOwner from "./pages/Owners/NewOwner";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		id: "root",
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
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
