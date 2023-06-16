import supabase from "../../supabase";

/**
 * Gets all the countries from the countries table
 * @returns {Array} Either an array populated with countries or empty
 */
export const getAllCountries = async () => {
	let { data, error } = await supabase.from("countries").select();

	if (error) {
		console.log(error);
		return [];
	}
	if (data) {
		return data;
	}
};
