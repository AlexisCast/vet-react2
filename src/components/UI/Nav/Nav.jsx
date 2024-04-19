import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";

import { CaretDownIcon } from "../../../components/Icons/Icons";

import styles from "./Nav.module.css";

export const Nav = ({ children, className }) => {
	return (
		<nav className={classNames(styles.navbar, className)}>{children}</nav>
	);
};

export const NavItem = ({ item, children, className, ...props }) => {
	const { type, to = null, subItems = null } = item;

	const [showSubMenu, setShowSubMenu] = useState(false);

	const toggleSubMenu = () => {
		setShowSubMenu(false);
	};

	const handleLinkClick = () => {
		setShowSubMenu(!showSubMenu);
	};

	if (type === "string") {
		return (
			<div className={classNames(styles.navItem, className)} {...props}>
				{children}
			</div>
		);
	}

	if (type === "NavLink") {
		return (
			<NavLink
				to={to}
				className={({ isActive }) =>
					classNames(
						isActive ? styles.active : null,
						styles.navItem,
						className
					)
				}
				end
				{...props}
			>
				{children}
			</NavLink>
		);
	}

	if (subItems) {
		return (
			<div
				className={classNames(styles.dropdown, className)}
				onClick={handleLinkClick}
				onMouseLeave={toggleSubMenu}
				{...props}
			>
				<div className={styles.navItem}>
					{children}
					<CaretDownIcon size="sm" />
				</div>
				<div
					className={`${styles.dropdownContent} ${
						showSubMenu ? styles.show : ""
					}`}
				>
					{subItems.map((subItem, index) => (
						<Link
							className={styles.subItem}
							key={index}
							to={subItem.to}
						>
							{subItem.name}
						</Link>
					))}
				</div>
			</div>
		);
	}
};

export const NavItemsContainer = ({ className, children }) => {
	return (
		<ul className={classNames(styles.nav_items, className)}>{children}</ul>
	);
};

export default {
	Nav,
	NavItem,
	NavItemsContainer,
};
