import PageTitle from "../PageTitle/PageTitle";

import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";

import { Nav, NavItem, Portal } from "../../UI";
import { SideBar } from "../SideBar/SideBar";

import { BarsIcon } from "../../Icons/Icons";
import styles from "./MobileNavBar.module.css";

const MobileNavBar = ({ token }) => {
	const dispatch = useDispatch();

	const drawerIsVisible = useSelector((state) => state.ui.drawerIsVisible);

	const handleOnclick = () => {
		dispatch(uiActions.openDrawer());
	};

	const toggleDrawer = () => {
		dispatch(uiActions.closeDrawer());
	};

	return (
		<>
			<Nav className={styles.Nav}>
				<PageTitle />
				<NavItem
					item={{ type: "string" }}
					onClick={handleOnclick}
					className={styles.BarsIcon}
				>
					<BarsIcon size="2xl" />
				</NavItem>
			</Nav>

			<Portal isOpen={drawerIsVisible} onClose={toggleDrawer}>
				<SideBar token={token} />
			</Portal>
		</>
	);
};

export default MobileNavBar;
