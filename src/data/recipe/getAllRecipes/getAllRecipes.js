import supabase from "../../supabase";

const table = process.env.NODE_ENV === "production" ? "recipes" : "recipes-dev";

export const getAllRecipes = async () => {
	let { data, error } = await supabase.from(table).select();

	if (error) {
		console.log(error);
		return [];
	}
	if (data) {
		return data;
	}
};