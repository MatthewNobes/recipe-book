import supabase from "../../supabase";

/**
 * Creates a new unit in the units table
 * @param {object} values Values object containing the values to add
 * @returns {number | undefined} The id of the created unit or undefined
 */
export const addUnit = async (values) => {
	const { data, error } = await supabase
		.from("units")
		.insert([values])
		.select();

	if (error) {
		return undefined;
	}
	if (data) {
		return data[0].id;
	}
};
