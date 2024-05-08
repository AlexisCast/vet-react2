import { useSubmit } from "react-router-dom";

import PageTitle from "../../../components/Navigation/PageTitle/PageTitle";

import { Nav, NavItem, NavItemsContainer } from "../../UI";

import { navItems } from "../../../util/navItems";

import styles from "./DesktopNavBar.module.css";

const DesktopNavBar = () => {
	const submit = useSubmit();

	const handleLogOut = () => {
		console.log("log out");
		submit(null, {
			method: "post",
			action: "/logout",
		});
	};

	return (
		<Nav>
			<div>
				<PageTitle />
			</div>
			<NavItemsContainer>
				{navItems.map((item, index) => (
					<li key={index}>
						<NavItem item={item}>{item.name}</NavItem>
					</li>
				))}
				<li>
					<NavItem
						item={{
							type: "NavLink",
							to: "/auth/login?mode=login",
							end: true,
						}}
					>
						Log In
					</NavItem>
				</li>
				<li>
					<NavItem item={{ type: "string" }} onClick={handleLogOut}>
						Log Out
					</NavItem>
				</li>
			</NavItemsContainer>
		</Nav>
	);
};

export default DesktopNavBar;
