import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";

import styles from "./Button.module.css";

const Button = ({
	as = "button",
	variant = "default",
	size = "md",
	children,
	className,
	color = "",
	transparent = false,
	...props
}) => {
	const Element = as;
	const elementProps = {
		...props,
		className: classNames(styles["Button"], className, {
			[styles["Primary"]]: variant === "primary",
			[styles["Secondary"]]: variant === "secondary",
			[styles["Small"]]: size === "sm",
			[styles["Medium"]]: size === "md",
			[styles["Large"]]: size === "lg",
			[styles["Error"]]: color === "error",
			[styles["Success"]]: color === "success",
			[styles["Transparent"]]: transparent === true,
		}),
	};

	if (as === "NavLink") {
		return <NavLink {...elementProps}>{children}</NavLink>;
	}

	if (as === "Link") {
		return <Link {...elementProps}>{children}</Link>;
	}

	return <Element {...elementProps}>{children}</Element>;
};

export default Button;
