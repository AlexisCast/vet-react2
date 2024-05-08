export const setToken = (token) => {
	if (token) {
		localStorage.setItem("token", token);
	} else {
		localStorage.removeItem("token");
	}
};

export const setUser = (user) => {
	if (user) {
		localStorage.setItem("user", user);
	} else {
		localStorage.removeItem("user");
	}
};

export const tokenLoader = () => {
	const token = getAuthToken();
	return token;
};

export const getAuthToken = () => {
	const token = localStorage.getItem("token");

	if (!token) {
		return null;
	}

	return token;
};
