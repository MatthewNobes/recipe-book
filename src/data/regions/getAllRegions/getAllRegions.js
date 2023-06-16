import supabase from "../../supabase";

/**
 * Gets all the regions in the regions table
 * @returns {Array} Either a populated with regions or empty
 */
export const getAllRegions = async () => {
	let { data, error } = await supabase.from("regions").select();

	if (error) {
		console.log(error);
		return [];
	}
	if (data) {
		return data;
	}
};
