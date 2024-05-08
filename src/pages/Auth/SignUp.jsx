import { useEffect, useState } from "react";
import { Form, json, Link, useActionData } from "react-router-dom";

import { Input } from "../../components/UI";

import { CLIENT_URL } from "../../config";

const SignUp = () => {
	const dataAction = useActionData();
	const initialLoginData = {
		name: "",
		email: "",
		password: "",
		passwordConfirm: "",
	};

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

	const handleObjectiveData = (identifier, value) => {
		setLoginData((prevValues) => ({
			...prevValues,
			[identifier]: value,
		}));
	};

	const MessageToDisplay = () => {
		const { status, data = "", msg } = dataAction;
		return (
			<>
				{status === "success" && (
					<p>
						Welcome {data.user.name}, please contact the
						Administrator for access.
					</p>
				)}
				{status === "fail" && <p>{msg}</p>}
			</>
		);
	};

	return (
		<div>
			{showDataAction && <MessageToDisplay />}

			<h2>Create Account</h2>
			<Form method="post">
				<div>
					<Input
						label="Name"
						id="name"
						name="name"
						type="text"
						onChange={(e) =>
							handleObjectiveData(e.target.name, e.target.value)
						}
						value={loginData.name}
						required
					/>
				</div>
				<div>
					<Input
						label="Email"
						id="email"
						name="email"
						type="email"
						onChange={(e) =>
							handleObjectiveData(e.target.name, e.target.value)
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
							handleObjectiveData(e.target.name, e.target.value)
						}
						value={loginData.password}
						required
					/>
				</div>
				<div>
					<Input
						label="Confirm Password"
						id="passwordConfirm"
						name="passwordConfirm"
						type="password"
						onChange={(e) =>
							handleObjectiveData(e.target.name, e.target.value)
						}
						value={loginData.passwordConfirm}
						required
					/>
				</div>
				<button>Sign Up</button>
			</Form>
			<Link to={`/auth/login?mode=login`}>Log In</Link>
		</div>
	);
};

export default SignUp;

export const action = async ({ request }) => {
	const data = await request.formData();

	const authData = {
		name: data.get("name"),
		email: data.get("email"),
		password: data.get("password"),
		passwordConfirm: data.get("passwordConfirm"),
	};

	if (Object.values(authData).some((value) => !value)) {
		return json({
			status: "fail",
			msg: "All fields must be filled",
		});
	}

	const response = await fetch(CLIENT_URL + "/api/v1/auth/signup", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(authData),
	});

	if (!response.ok) {
		return response;
	} else {
		return response;
	}
};
