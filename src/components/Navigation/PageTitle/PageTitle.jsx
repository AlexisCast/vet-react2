import { Link } from "react-router-dom";

import { TITLE } from "../../../config";

import styles from "./PageTitle.module.css";

const PageTitle = () => {
	return (
		<Link className={styles.PageTitle} to="/">
			{TITLE}
		</Link>
	);
};
export default PageTitle;
