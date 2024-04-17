import { Link } from "react-router-dom";

import styles from "./PageTitle.module.css";

const title = import.meta.env.VITE_TITLE;

const PageTitle = () => {
	return (
		<Link className={styles.PageTitle} to="/">
			{title}
		</Link>
	);
};
export default PageTitle;
