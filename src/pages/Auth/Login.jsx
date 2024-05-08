import {
	Form,
	json,
	Link,
	redirect,
	useActionData,
	useSearchParams,
} from "react-router-dom";
import { Input } from "../../components/UI";
import { useEffect, useState } from "react";
import { setToken, setUser } from "../../util/auth";

import { CLIENT_URL } from "../../config";

const Login = () => {
	//useSearchParams to know what screen to display
	const [searchParams] = useSearchParams();
	const dataAction = useActionData();

	const initialLoginData = {
		email: "",
		password: "",
	};

	const isForgottenPass = searchParams.get("mode") === "forgotPassword";
	const [loginData, setLoginData] = useState(initialLoginData);

	const [showDataAction, setShowDataAction] = useState("");

	useEffect(() => {
		const { status } = dataAction || {};

		if (status) {
			setShowDataAction(true);
		}

		if (status === "success") {
			setLoginData(initialLoginData);
		}
	}, [dataAction]);

	// when mode is changed it resets states
	useEffect(() => {
		setShowDataAction(false);
		setLoginData(initialLoginData);
	}, [isForgottenPass]);

	const handleObjectiveData = (identifier, value) => {
		setLoginData((prevValues) => ({
			...prevValues,
			[identifier]: value,
		}));
	};

	const MessageToDisplay = () => {
		const { status = "", msg = "" } = dataAction || {};
		return (
			<>
				{status === "success" && <p>{msg}</p>}
				{status === "fail" || (status === "error" && <p>{msg}</p>)}
			</>
		);
	};

	return (
		<div>
			{!isForgottenPass ? (
				<div>
					{showDataAction && <MessageToDisplay />}
					<h2>Log In</h2>
					<Form method="post">
						<div>
							<Input
								label="Email"
								id="email"
								name="email"
								type="email"
								onChange={(e) =>
									handleObjectiveData(
										e.target.name,
										e.target.value
									)
								}
								value={loginData.email}
								required
							/>
						</div>
						<div>
							<Input
								label="Password"
								id="password"
								name="password"
								type="password"
								onChange={(e) =>
									handleObjectiveData(
										e.target.name,
										e.target.value
									)
								}
								value={loginData.password}
								required
							/>
							<Link to={`/auth/login?mode=forgotPassword`}>
								Forgot Password?
							</Link>
							<Link to={`/auth/signup`}>Create Account</Link>
						</div>
						<button>Log in</button>
					</Form>
				</div>
			) : (
				<div>
					{showDataAction && <MessageToDisplay />}
					<h2>Forgot Password</h2>
					<p>Please enter your e-mail to reset your password.</p>
					<Form method="post">
						<div>
							<Input
								label="Email"
								id="email"
								name="email"
								type="email"
								onChange={(e) =>
									handleObjectiveData(
										e.target.name,
										e.target.value
									)
								}
								value={loginData.email}
								required
							/>
						</div>
						<button>Send Password</button>
					</Form>
					<Link to={`?mode=login`}>Log In</Link>
				</div>
			)}
		</div>
	);
};

export default Login;

export const action = async ({ request }) => {
	const searchParams = new URL(request.url).searchParams;
	const mode = searchParams.get("mode") || "signup";

	if (mode !== "login" && mode !== "forgotPassword") {
		throw json({ msg: "Unsupported mode. " }, { status: 422 });
	}

	const data = await request.formData();

	const authData = {
		email: data.get("email"),
		password: data.get("password"),
	};

	if (mode === "login") {
		const response = await fetch(CLIENT_URL + "/api/v1/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(authData),
		});

		if (!response.ok) {
			return response;
		} else {
			const responseData = await response.json();
			const token = responseData.token;
			const user = JSON.stringify(responseData.data.user.name);

			setToken(token);
			setUser(user);

			return redirect("/");
		}
	} else {
		const response = await fetch(
			CLIENT_URL + "/api/v1/auth/forgotPassword",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: data.get("email"),
				}),
			}
		);

		if (!response.ok) {
			return response;
		} else {
			return response;
		}
	}
};
