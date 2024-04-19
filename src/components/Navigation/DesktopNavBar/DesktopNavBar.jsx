import PageTitle from "../../../components/Navigation/PageTitle/PageTitle";
import { Nav, NavItem, NavItemsContainer } from "../../UI";

import { navItems } from "../../../util/navItems";

import styles from "./DesktopNavBar.module.css";

const DesktopNavBar = () => {
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
				<NavItem item={{ type: "string" }}>Log In</NavItem>
				<NavItem item={{ type: "string" }}>Log Out</NavItem>
			</NavItemsContainer>
		</Nav>
	);
};

export default DesktopNavBar;
