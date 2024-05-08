import { useEffect } from "react";
import {
	Outlet,
	useLoaderData,
	useNavigation,
	useSubmit,
} from "react-router-dom";

import MainNavigation from "../../components/Navigation/MainNavigation/MainNavigation";

import styles from "./Root.module.css";

const RootLayout = () => {
	const navigation = useNavigation();
	const token = useLoaderData();
	const submit = useSubmit();

	useEffect(() => {
		if (!token) {
			return;
		}

		//TODO: function to make token equal 'Expired'
		if (token === "EXPIRED") {
			submit(null, { action: "/logout", method: "post" });
			return;
		}
	}, [token, submit]);

	return (
		<>
			<MainNavigation />
			<main className={styles.content}>
				{navigation.state === "loading" && <p>Loading...</p>}
				<Outlet />
			</main>
		</>
	);
};

export default RootLayout;
