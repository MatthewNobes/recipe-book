import supabase from "data/supabase";

/**
 * Gets an array of the roles a user has based on their user id
 * @param {Number} userId The id of the user to find roles for
 * @returns {Array} An array of the roles that the user posses
 */
export const getUserRoles = async (userId) => {
	const { data, error } = await supabase
		.from("userRoles")
		.select("roles (*)")
		.eq("user", userId);

	if (error) {
		console.log(error);
		return [];
	}
	if (data) {
		if (data.length > 0) {
			const usersRoles = data.map((role) => {
				return role.roles;
			});
			return usersRoles;
		}
		return [];
	}
};
