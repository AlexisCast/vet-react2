import { Outlet } from "react-router-dom";

const GeneralRootLayout = () => {
	return (
		<>
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default GeneralRootLayout;
