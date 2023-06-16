import supabase from "../../supabase";

/**
 * Gets all the categories in the category table
 * @returns {Array} Either empty or populated depending on the outcome
 */
export const getAllCategories = async () => {
	let { data, error } = await supabase.from("categories").select();

	if (error) {
		console.log(error);
		return [];
	}
	if (data) {
		return data;
	}
};
