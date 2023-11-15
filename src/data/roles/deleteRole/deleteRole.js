import supabase from "../../supabase";

/**
 * Deletes a role record for the passed ID
 * @param {number} id The ID of the role record to delete
 * @returns {string} Either success or failure
 */
export const deleteRole = async (id) => {
	const { error } = await supabase.from("roles").delete().eq("id", id);

	if (error) {
		console.log(error);
		return "failed";
	} else {
		return "success";
	}
};
