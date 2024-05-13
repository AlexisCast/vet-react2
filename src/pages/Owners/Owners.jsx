import { useState } from "react";
import { useActionData, useSubmit } from "react-router-dom";

import { OwnersTable } from "../../components/Owners";

import { getAuthToken } from "../../util/auth";

import { CLIENT_URL, OWNERS_URL } from "../../config";

const Owners = () => {
	const submit = useSubmit();
	const dataAction = useActionData();

	const [checkedShowFields, setCheckedShowFields] = useState({
		phoneNumber2: false,
		createdAt: false,
		updatedAt: false,
		email: false,
		status: false,
	});

	const [checkedSortFields, setCheckedSortFields] = useState({
		firstName: false,
		lastName: false,
		createdAt: false,
		updatedAt: false,
	});

	console.log({ dataAction });

	const handleCheckboxChangeShow = ({ target }) => {
		const { name, checked } = target;

		setCheckedShowFields((prevState) => ({
			...prevState,
			[name]: checked,
		}));
	};

	const handleCheckboxChangeSort = ({ target }) => {
		const { name, checked } = target;

		setCheckedSortFields((prevState) => ({
			...prevState,
			[name]: checked,
		}));
	};

	const actionHandler = () => {
		submit(null, { method: "post" });
	};

	return (
		<div>
			<h1>Owners</h1>
			<hr />
			<button onClick={actionHandler}>Get Owners</button>

			<hr />
			{/* show columns of the table */}
			<span>Show Colums</span>
			<div>
				<label>
					<input
						name="phoneNumber2"
						type="checkbox"
						checked={checkedShowFields.phoneNumber2}
						onChange={handleCheckboxChangeShow}
					/>
					Phone Number2
				</label>
				<label>
					<input
						name="createdAt"
						type="checkbox"
						checked={checkedShowFields.createdAt}
						onChange={handleCheckboxChangeShow}
					/>
					Created
				</label>
				<label>
					<input
						name="updatedAt"
						type="checkbox"
						checked={checkedShowFields.updatedAt}
						onChange={handleCheckboxChangeShow}
					/>
					Updated
				</label>
				<label>
					<input
						name="email"
						type="checkbox"
						checked={checkedShowFields.email}
						onChange={handleCheckboxChangeShow}
					/>
					Email
				</label>
				<label>
					<input
						name="status"
						type="checkbox"
						checked={checkedShowFields.status}
						onChange={handleCheckboxChangeShow}
					/>
					Status
				</label>
			</div>

			<hr />
			{/* sort by */}
			<span>Sort By</span>
			<div>
				<label>
					<input
						name="firstName"
						type="checkbox"
						checked={checkedSortFields.firstName}
						onChange={handleCheckboxChangeSort}
					/>
					First Name
				</label>
				<label>
					<input
						name="lastName"
						type="checkbox"
						checked={checkedSortFields.lastName}
						onChange={handleCheckboxChangeSort}
					/>
					Last Name
				</label>
				<label>
					<input
						name="createdAt"
						type="checkbox"
						checked={checkedSortFields.createdAt}
						onChange={handleCheckboxChangeSort}
					/>
					Created
				</label>
				<label>
					<input
						name="updatedAt"
						type="checkbox"
						checked={checkedSortFields.updatedAt}
						onChange={handleCheckboxChangeSort}
					/>
					Updated
				</label>
			</div>

			<hr />
			{dataAction?.data && (
				<>
					<OwnersTable dataAction={dataAction} />
				</>
			)}
		</div>
	);
};

export default Owners;

export const loader = async ({ request, params }) => {
	console.log("Owners Loader");
};

export const action = async ({ request, params }) => {
	console.log("Owners Action");

	const method = request.method;

	console.log({ method });

	const token = getAuthToken();
	console.log({ token });

	console.log(CLIENT_URL + OWNERS_URL);
	const response = await fetch(CLIENT_URL + OWNERS_URL, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});

	return response;
};
