import { SubPageHeader, Page } from "components";
import { useEffect, useState } from "react";
import { getUsersWithRoles, getAllRoles } from "data";
import { UserList } from "./UserList/UserList";

export const UserManagement = () => {
	// going to need
	// gets top 20 users from the system
	// search bar at the top allows the user to search for users by their email
	// on clicking on a user opens a model, in here you can view the roles assigned to a user, add and remove roles from a users profile
	// other options will also be added later such as banning a user, suspending, send password reset etc.

	const [users, setUsers] = useState();
	const [availableRoles, setAvailableRoles] = useState();

	const populateUsers = async () => {
		const usersWithRoles = await getUsersWithRoles();
		if (usersWithRoles.result === "success") {
			setUsers(usersWithRoles.data);
		} else {
			setUsers([]);
		}
	};

	const populateRoles = async () => {
		const result = await getAllRoles();
		setAvailableRoles(result);
	};

	useEffect(() => {
		populateUsers();
		populateRoles();
	}, []);

	return (
		<>
			<SubPageHeader headerText="User Management" />
			<Page>
				<UserList
					users={users}
					availableRoles={availableRoles}
					refetchUserData={populateUsers}
				/>
			</Page>
		</>
	);
};
