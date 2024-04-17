const Owners = () => {
	return (
		<div>
			<h1>Owners</h1>
		</div>
	);
};

export default Owners;

export const loader = async ({ request, params }) => {
	console.log("Owners");
};
