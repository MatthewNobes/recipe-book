import supabase from "../../supabase";

/**
 * Used to update an existing role
 * @param {object} values Values object containing the values to add
 * @param {number} idToUpdate The ID of the value to update
 * @returns {number | undefined} The id of the created unit or undefined
 */
export const updateRole = async (values, idToUpdate) => {
	const { data, error } = await supabase
		.from("roles")
		.update(values)
		.eq("id", idToUpdate)
		.select();

	if (error) {
		return { result: "failed", error: error };
	}
	if (data) {
		return { result: "success", data: data };
	}
};
