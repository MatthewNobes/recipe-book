import { IconList, Page, SubPageHeader } from "components";
import { SquareFoot } from "@mui/icons-material";

const AdminOptions = () => {
	const adminOptions = [
		{
			label: "Units of measurements",
			icon: <SquareFoot />,
			route: "/Admin/UnitsAdmin",
		},
	];

	return <IconList options={adminOptions} />;
};

export const Admin = () => {
	return (
		<>
			<SubPageHeader headerText="Admin" />
			<Page>
				<AdminOptions />
			</Page>
		</>
	);
};
