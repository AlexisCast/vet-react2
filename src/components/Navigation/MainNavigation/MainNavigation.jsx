import { useEffect, useState } from "react";

import DesktopNavBar from "../../../pages/Root/DesktopNavBar/DesktopNavBar";

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
	const windowWidth = useWindowWidth();
	const windowIsWide = windowWidth > 1178;

	return (
		<header>
			{windowIsWide ? <DesktopNavBar /> : <div>MobileNavBar</div>}
		</header>
	);
};

export default MainNavigation;
