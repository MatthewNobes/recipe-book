import { IconList, Page, SubPageHeader } from "components";
import { SquareFoot, Group } from "@mui/icons-material";

const AdminOptions = () => {
	const adminOptions = [
		{
			label: "Units of measurements",
			icon: <SquareFoot />,
			route: "/Admin/UnitsAdmin",
		},
		{
			label: "Role management",
			icon: <Group />,
			route: "/Admin/Roles/Management",
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
