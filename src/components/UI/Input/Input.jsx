import classNames from "classnames";

import { Label } from "../../UI";

import styles from "./Input.module.css";

const Input = ({ label, isRequired, id, className, ...props }) => {
	return (
		<div className={classNames(styles.Input, className)}>
			<Label htmlFor={id} require={isRequired}>
				{label}
			</Label>
			<input id={id} {...props} />
		</div>
	);
};

export default Input;
