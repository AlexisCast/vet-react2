import { useState } from "react";
import styles from "./Accordion.module.css";
import classNames from "classnames";

const Accordion = ({ title, children, className }) => {
	const [isActive, setIsActive] = useState(false);

	const onTitleClick = () => {
		setIsActive(!isActive);
	};

	return (
		<div className={styles.Accordion}>
			<div
				className={classNames(
					`${styles.title} ${isActive ? styles.active : ""}`
				)}
				onClick={onTitleClick}
			>
				<i className="dropdown icon"></i>
				{title}
			</div>
			{isActive && (
				<div
					className={classNames(
						styles.content,
						styles.active,
						className
					)}
				>
					{children}
				</div>
			)}
		</div>
	);
};

export default Accordion;
