import ReactDOM from "react-dom";

import styles from "./Portal.module.css";

const Backdrop = ({ onClose }) => {
	return <div className={styles.Backdrop} onClick={onClose} />;
};

const PortalOverlay = ({ children }) => {
	return <div className={styles.Portal}>{children}</div>;
};

export const Portal = ({
	isOpen = false,
	onClose,
	children,
	portalDivId = "portal-root",
	backdropDivId = "backdrop-root",
}) => {
	if (!isOpen) return null;

	const backdropRoot = document.getElementById(backdropDivId);
	const portalRoot = document.getElementById(portalDivId);

	if (!portalRoot || !backdropRoot) return null;

	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClose={onClose} />,
				backdropRoot
			)}

			{ReactDOM.createPortal(
				<PortalOverlay>{children}</PortalOverlay>,
				portalRoot
			)}
		</>
	);
};

export default Portal;
