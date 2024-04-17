const OwnerDetailPage = () => {
	return (
		<div>
			<h1>Owner Detail</h1>
		</div>
	);
};

export default OwnerDetailPage;

export const loader = async ({ request, params }) => {
	console.log("ownerDetail loader");
};
