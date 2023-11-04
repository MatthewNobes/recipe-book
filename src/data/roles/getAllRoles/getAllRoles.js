import supabase from "../../supabase";

/**
 * Gets all the roles in the roles table
 * @returns {Array} Either empty or populated depending on the outcome
 */
export const getAllRoles = async () => {
	let { data, error } = await supabase.from("roles").select();

	if (error) {
		console.log(error);
		return [];
	}
	if (data) {
		return data;
	}
};
