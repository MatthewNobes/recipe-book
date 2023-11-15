import supabase from "data/supabase";

/**
 * Used to assign a set role to a set user
 * @param {Number} idOfRoleToAssign the id of the role that is to be assigned to the user
 * @param {Number} idOfUserToAssignRoleTo the id of the user who is being assigned the role
 * @returns {Object} a result object of either success of failed, if it fails the error is also included
 */
export const grantUserRole = async (
	idOfRoleToAssign,
	idOfUserToAssignRoleTo,
) => {
	const { data, error } = await supabase
		.from("userRoles")
		.insert({ user: idOfUserToAssignRoleTo, roles: idOfRoleToAssign })
		.select();

	if (error) {
		return { result: "failed", error: error };
	}
	if (data) {
		return { result: "success", data: data };
	}
};
