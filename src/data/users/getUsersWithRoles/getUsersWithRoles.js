import supabase from "data/supabase";

/**
 * Gets a list of users and the groups that they belong to
 * @returns {object} Contains the result parameter and either the error or the data
 */
export const getUsersWithRoles = async () => {
	const { data, error } = await supabase
		.from("users")
		.select("id, email, firstName, lastName, userRoles ( roles (*) )");

	if (error) {
		return { result: "failed", error: error };
	}
	if (data) {
		return { result: "success", data: data };
	}
};
