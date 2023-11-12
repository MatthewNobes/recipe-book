import supabase from "../../supabase";

/**
 * Used to remove a role from a user
 * @param {*} idOfUserToRemoveRoleFrom the id of the user who the role is being removed from
 * @param {*} idOfRoleToRemove the id of the role being taken away from the user
 * @returns {object} a result object of either success of failed, if it fails the error is also included
 */
export const removeUsersRole = async (
	idOfUserToRemoveRoleFrom,
	idOfRoleToRemove,
) => {
	const { error } = await supabase
		.from("userRoles")
		.delete()
		.eq("user", idOfUserToRemoveRoleFrom)
		.eq("roles", idOfRoleToRemove);

	if (error) {
		return { result: "failed", error: error };
	} else {
		return { result: "success" };
	}
};
