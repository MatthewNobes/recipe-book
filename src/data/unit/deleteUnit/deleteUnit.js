import supabase from "../../supabase";

/**
 * Deletes a unit record for the passed ID
 * @param {number} id The ID of the unit record to delete
 * @returns {string} Either success or failure
 */
export const deleteUnit = async (id) => {
	const { error } = await supabase.from("units").delete().eq("id", id);

	if (error) {
		console.log(error);
		return "failed";
	} else {
		return "success";
	}
};
