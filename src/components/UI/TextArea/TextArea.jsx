import styles from "./TextArea.module.css";

const TextArea = ({ textValue, setTextValue, maxLength = 200, ...props }) => {
	const handleChange = (event) => {
		if (event.target.value.length <= maxLength) {
			setTextValue(event.target.value);
		}
	};

	return (
		<section className={styles.TextArea}>
			<textarea
				value={textValue}
				onChange={handleChange}
				rows={6}
				{...props}
			/>
			<p>
				[{textValue.length}/{maxLength}]
			</p>
		</section>
	);
};

export default TextArea;
