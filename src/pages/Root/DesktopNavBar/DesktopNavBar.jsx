import { Link, NavLink } from "react-router-dom";
import PageTitle from "../../../components/Navigation/PageTitle/PageTitle";
import styles from "./DesktopNavBar.module.css";
import { CaretDownIcon } from "../../../components/Icons/Icons";
import { useState } from "react";

const DesktopNavBar = () => {
	const navItems = [
		{
			name: "hh:mm:ss",
			type: "string",
		},
		{
			name: "Welcome User",
			type: "string",
		},
		{
			name: "Home",
			type: "NavLink",
			to: "/",
			end: true,
		},
		{
			name: "Owners",
			subItems: [
				{ name: "All", type: "Link", to: "/owners" },
				{ name: "New", type: "Link", to: "/owners/new" },
				{ name: "Deleted", type: "Link", to: "/owners?state=false" },
			],
		},
		{
			name: "Patients",
			subItems: [
				{ name: "All", type: "Link", to: "/patients" },
				{ name: "New", type: "Link", to: "/patients/new" },
				{ name: "Deleted", type: "Link", to: "/patients?state=false" },
			],
		},
		{
			name: "Records",
			subItems: [
				{ name: "All", type: "Link", to: "/records" },
				{ name: "New", type: "Link", to: "/records/new" },
				{ name: "Deleted", type: "Link", to: "/records?state=false" },
			],
		},
		{
			name: "Species",
			subItems: [
				{ name: "All", type: "Link", to: "/species" },
				{ name: "New", type: "Link", to: "/species/new" },
				{ name: "Deleted", type: "Link", to: "/records?state=false" },
			],
		},
	];

	return (
		<nav className={styles.navbar}>
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
		</nav>
	);
};

export default DesktopNavBar;

const NavItem = ({ item, children }) => {
	const { type, to = null, subItems = null, className, end } = item;

	const [showSubMenu, setShowSubMenu] = useState(false);

	const toggleSubMenu = () => {
		console.log("false");
		setShowSubMenu(false);
	};

	const handleLinkClick = () => {
		setShowSubMenu(!showSubMenu);
		console.log("click");
	};

	if (type === "string") {
		return <div className={styles.navItem}>{children}</div>;
	}

	if (type === "NavLink") {
		return (
			<NavLink
				to={to}
				className={({ isActive }) =>
					isActive
						? `${styles.active} ${styles.navItem}`
						: styles.navItem
				}
				end
			>
				{children}
			</NavLink>
		);
	}

	if (subItems) {
		return (
			<div
				className={styles.dropdown}
				onClick={handleLinkClick}
				onMouseLeave={toggleSubMenu}
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
