import supabase from "../../supabase";

/**
 * Gets all the units from the units table
 * @returns An array, either filled with unit objects or empty
 */
export const getAllUnits = async () => {
	let { data, error } = await supabase.from("units").select();

	if (error) {
		console.log(error);
		return [];
	}
	if (data) {
		return data;
	}
};
