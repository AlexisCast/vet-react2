import { Link, useSubmit } from "react-router-dom";

import { BarsIcon, CaretDownIcon, CircleIcon } from "../../Icons/Icons";
import { Accordion, Button, NavItem, NavItemsContainer } from "../../UI";

import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";

import { navItems } from "../../../util/navItems";

import styles from "./SideBar.module.css";

export const SideBar = ({ token }) => {
	const submit = useSubmit();
	const dispatch = useDispatch();

	let navItemsWithSubItems = navItems.slice(2);

	const handleOnclick = () => {
		dispatch(uiActions.closeDrawer());
	};

	const handleLogOut = () => {
		console.log("log out");
		dispatch(uiActions.closeDrawer());
		submit(null, {
			method: "post",
			action: "/logout",
		});
	};

	const AccordionHeader = ({ titleText }) => {
		console.log("name", titleText);
		return (
			<Button className={styles.AccordionButton} size="lg">
				{titleText}
				<CaretDownIcon size="lg" />
			</Button>
		);
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
			<NavItemsContainer className={styles.nav_items}>
				{!token && (
					<li>
						<Button
							as={Link}
							to="/auth/login?mode=login"
							size="lg"
							className={`${styles.AccordionButton}`}
							onClick={handleOnclick}
						>
							Log In
						</Button>
					</li>
				)}
				{navItemsWithSubItems.map((item, index) => (
					<li key={index}>
						{item.subItems ? (
							<Accordion
								title={
									<AccordionHeader titleText={item.name} />
								}
								className={styles.AccordionContent}
							>
								{item.subItems.map((subItem, index) => (
									<Button
										as={Link}
										key={index}
										to={subItem.to}
										className={styles.AccordionButton}
										onClick={handleOnclick}
									>
										{subItem.name}
										<CircleIcon size="2xs" />
									</Button>
								))}
							</Accordion>
						) : (
							<Button
								as={Link}
								key={index}
								to={item.to}
								size="lg"
								className={`${styles.AccordionButton}`}
								onClick={handleOnclick}
							>
								{item.name}
							</Button>
						)}
					</li>
				))}
				{token && (
					<li>
						<Button
							as={Link}
							size="lg"
							className={`${styles.AccordionButton}`}
							onClick={handleLogOut}
						>
							Log Out
						</Button>
					</li>
				)}
			</NavItemsContainer>
		</aside>
	);
};
