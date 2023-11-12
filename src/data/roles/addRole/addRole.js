import supabase from "../../supabase";

/**
 * Creates a new role in the role table
 * @param {object} values Values object containing the values to add
 * @returns {number | undefined} The id of the created unit or undefined
 */
export const addRole = async (values) => {
	const { data, error } = await supabase
		.from("roles")
		.insert([values])
		.select();

	if (error) {
		return { result: "failed", error: error };
	}
	if (data) {
		return { result: "success", data: data[0] };
	}
};
