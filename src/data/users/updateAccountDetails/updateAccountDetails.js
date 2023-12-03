import supabase from "../../supabase";

/**
 * used to update the users basic details, excluding their email address or password
 * @param {object} values the update user values
 * @returns {object} standard update response object
 */
export const updateAccountDetails = async (values) => {
	// update public.users table
	const { data, error } = await supabase
		.from("users")
		.update(values)
		.eq("id", values.id)
		.select();

	if (error) {
		return { result: "failed", error: error };
	}
	if (data) {
		return { result: "success", data: data };
	}
};
