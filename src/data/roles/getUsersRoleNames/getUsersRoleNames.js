import { getUserRoles } from "data/authentication";
import { getCurrentUser } from "data/authentication/getCurrentUser/getCurrentUser";

export const getUsersRoleNames = async () => {
	const currentUser = await getCurrentUser();
	if (currentUser) {
		const rawRoles = await getUserRoles(currentUser.id);
		const roles = rawRoles.map((role) => {
			return role.role;
		});
		return roles;
	} else {
		return false;
	}
};
