import { useEffect, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";

import DesktopNavBar from "../DesktopNavBar/DesktopNavBar";
import MobileNavBar from "../MobileNavBar/MobileNavBar";

import styles from "./MainNavigation.module.css";

const useWindowWidth = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);

		// Cleanup
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return windowWidth;
};

const MainNavigation = () => {
	const token = useRouteLoaderData("root");

	const windowWidth = useWindowWidth();
	const windowIsWide = windowWidth > 1200;

	return (
		<header>
			{windowIsWide ? (
				<DesktopNavBar token={token} />
			) : (
				<MobileNavBar token={token} />
			)}
		</header>
	);
};

export default MainNavigation;
