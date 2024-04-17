import { BarsIcon, CaretDownIcon } from "../../Icons/Icons";
import { NavItem } from "../../UI";

import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";

import { navItems } from "../../../util/navItems";

import styles from "./SideBar.module.css";

export const SideBar = () => {
	const dispatch = useDispatch();

	let navItemsWithSubItems = navItems.slice(3);

	const handleOnclick = () => {
		dispatch(uiActions.closeDrawer());
	};

	return (
		<aside className={styles.SideBar}>
			<header>
				<NavItem
					item={{ type: "string" }}
					onClick={handleOnclick}
					className={styles.BarsIcon}
				>
					<BarsIcon size="2xl" />
				</NavItem>
			</header>
			<ul className={styles.nav_items}>
				{navItemsWithSubItems.map((item, index) => (
					<li key={index}>
						<div className={styles.navItem}>
							{item.name}
							<CaretDownIcon size="lg" />
						</div>
					</li>
          //TODO: display subItems
				))}
			</ul>
		</aside>
	);
};
