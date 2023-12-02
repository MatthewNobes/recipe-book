import { IconList, Page, SubPageHeader } from "components";
import { SquareFoot, Group, ManageAccounts } from "@mui/icons-material";
import { Divider } from "@mui/material";

const AdminOptions = () => {
	const databaseManagementOptions = [
		{
			label: "Units of measurements",
			icon: <SquareFoot />,
			route: "/admin/units",
		},
	];

	const UserManagementOptions = [
		{
			label: "Role management",
			icon: <Group />,
			route: "/admin/roles",
		},
		{
			label: "User management",
			icon: <ManageAccounts />,
			route: "/admin/users",
		},
	];

	return (
		<>
			<IconList
				options={UserManagementOptions}
				listSubheader={"User Management"}
			/>
			<Divider />
			<IconList
				options={databaseManagementOptions}
				listSubheader={"Data Management"}
			/>
		</>
	);
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
