import { Link } from "react-router-dom";

import { Button, Table } from "../../UI";

import { dateToString } from "../../../util/dates";

import styles from "./OwnersTable.module.css";

export const OwnersTable = ({ dataAction, stateValue = true }) => {
	console.log("ownerstable ", dataAction);
	const { data, results, shown } = dataAction;

	const deleteHandler = async (recordId) => {
		console.log("delete... ", recordId);
	};

	const restoreHandler = async (recordId) => {
		console.log("restore... ", recordId);
	};

	return (
		<section className={styles.section}>
			<Table.TableContainer className={styles.TableContainer}>
				<p>Total: {results}</p>
				<p>Shown: {shown}</p>
				<Table.Table>
					<Table.TableHeader>
						<Table.TableRow>
							<Table.TableHeaderCell width={150}>
								Owner First Name
							</Table.TableHeaderCell>
							<Table.TableHeaderCell width={150}>
								Owner Last Name
							</Table.TableHeaderCell>
							<Table.TableHeaderCell width={150}>
								Phone Number 1
							</Table.TableHeaderCell>
							<Table.TableHeaderCell width={150}>
								Phone Number 2
							</Table.TableHeaderCell>
							<Table.TableHeaderCell width={150}>
								Created
							</Table.TableHeaderCell>
							<Table.TableHeaderCell width={150}>
								Updated
							</Table.TableHeaderCell>
							<Table.TableHeaderCell width={150}>
								email
							</Table.TableHeaderCell>
							<Table.TableHeaderCell width={150}>
								status
							</Table.TableHeaderCell>
							<Table.TableHeaderCell width={80}>
								Open
							</Table.TableHeaderCell>
							{stateValue && (
								<Table.TableHeaderCell width={80}>
									Restore
								</Table.TableHeaderCell>
							)}
							<Table.TableHeaderCell width={80}>
								Edit
							</Table.TableHeaderCell>
							<Table.TableHeaderCell width={80}>
								{stateValue && "Permanent "}Delete
							</Table.TableHeaderCell>
						</Table.TableRow>
					</Table.TableHeader>
					<Table.TableBody>
						{data.owners.map(
							(
								{
									_id,
									firstName,
									lastName,
									typePhone1,
									phoneNumber1,
									typePhone2,
									phoneNumber2,
									createdAt,
									updatedAt,
									email,
									status,
								},
								index
							) => (
								<Table.TableRow key={index}>
									<Table.TableDataCell>
										{firstName}
									</Table.TableDataCell>
									<Table.TableDataCell>
										{lastName}
									</Table.TableDataCell>
									<Table.TableDataCell>
										{phoneNumber1}
									</Table.TableDataCell>
									<Table.TableDataCell>
										{phoneNumber2}
									</Table.TableDataCell>
									<Table.TableDataCell>
										{dateToString(createdAt)}
									</Table.TableDataCell>
									<Table.TableDataCell>
										{dateToString(updatedAt)}
									</Table.TableDataCell>
									<Table.TableDataCell>
										{email}
									</Table.TableDataCell>
									<Table.TableDataCell>
										{status}
									</Table.TableDataCell>
									<Table.TableDataCell>
										<Button to={`/owners/${_id}`} as={Link}>
											Open
										</Button>
									</Table.TableDataCell>
									{stateValue && (
										<Table.TableDataCell>
											<Button
												color="success"
												onClick={() => {
													restoreHandler(_id);
												}}
											>
												Restore
											</Button>
										</Table.TableDataCell>
									)}
									<Table.TableDataCell>
										<Button to={`./${_id}/edit`} as={Link}>
											Edit
										</Button>
									</Table.TableDataCell>
									<Table.TableDataCell>
										<Button
											color="error"
											onClick={() => {
												deleteHandler(_id);
											}}
										>
											Delete
										</Button>
									</Table.TableDataCell>
								</Table.TableRow>
							)
						)}
					</Table.TableBody>
				</Table.Table>
			</Table.TableContainer>
		</section>
	);
};
