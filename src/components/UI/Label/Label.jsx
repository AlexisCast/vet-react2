import styles from "./Label.module.css";

const Label = ({ children, required, ...props }) => {
	return (
		<label {...props}>
			{children}
			{required && <span className={styles.requiredColor}>*</span>}
		</label>
	);
};

export default Label;
