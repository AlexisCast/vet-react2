import PageTitle from "../../../components/Navigation/PageTitle/PageTitle";
import { Nav, NavItem } from "../../UI";

import { navItems } from "../../../util/navItems";

import styles from "./DesktopNavBar.module.css";

const DesktopNavBar = () => {
	return (
		<Nav>
			<div>
				<PageTitle />
			</div>
			<ul className={styles.nav_items}>
				{navItems.map((item, index) => (
					<li key={index}>
						<NavItem item={item}>{item.name}</NavItem>
					</li>
				))}
				<NavItem item={{ type: "string" }}>Log In</NavItem>
				<NavItem item={{ type: "string" }}>Log Out</NavItem>
			</ul>
		</Nav>
	);
};

export default DesktopNavBar;
