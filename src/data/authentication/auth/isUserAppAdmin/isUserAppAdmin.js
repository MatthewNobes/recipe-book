import { getCurrentUser } from "data/authentication/getCurrentUser/getCurrentUser";
import { getUserRoles } from "data/authentication/getUserRoles/getUserRoles";

/**
 * Finds out if the current user is an admin or not
 * @returns { Boolean } Returns true if the user is an admin or false if not
 */
export const isUserAppAdmin = async () => {
	const currentUser = await getCurrentUser();

	if (currentUser) {
		const usersRoles = await getUserRoles(currentUser.id);

		const isAdmin = usersRoles.some((role) => {
			if (role.role === "App Admin") {
				return true;
			}
		});
		return isAdmin;
	} else {
		return false;
	}
};
